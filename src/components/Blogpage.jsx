import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import BlogCard from "../UI/BlogCard";

function Blogpage() {
    const navigate = useNavigate();
    const params = useParams();
    const hasAnimated = useIntersectionObserver();
    const [fetchedBlogs, setFetchedBlogs] = useState([]);
    const [blog, setBlog] = useState();
    const fetchBlogs = async () => {
        try {
            const result = await fetch("/assets/json/storedBlogs.json");
            const data = await result.json();
            setFetchedBlogs(data.posts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);
    useEffect(() => {
        if (fetchedBlogs.length > 0 && params.slug) {
            const blogFilter = fetchedBlogs.filter(
                (item) => item.slug === params.slug
            );
            setBlog(blogFilter[0]);
        }
    }, [fetchedBlogs, params.slug]);
    return (
        <section
            className={`max-w-[90.5rem] mt-[8rem] px-[6%] md:p-0 mx-auto flex flex-col items-center justify-center  transition-all duration-1000 animate-fade-in-up`}
        >
            {blog ? (
                <div className=" animate-fade-in-up sm:">
                    <div className="sm:h-150 md:h-130 overflow-hidden">
                        <img
                            src={`assets/images/${blog.img}`}
                            className=" object-cover mx-auto sm:h-150  md:h-auto sm:-translate-y-30"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-end mt-10 items-center gap-5">
                        <span className="flex gap-2">
                            <Calendar size={"2rem"} className="text-gray-400" />
                            <p className="text-2xl text-gray-400">
                                {" "}
                                {blog.published_at}
                            </p>
                        </span>
                        <span className="flex gap-2">
                            <BookOpen size={"2rem"} className="text-gray-400" />
                            <p className="text-2xl text-gray-400">
                                {blog.reading_time_minutes} minute read
                            </p>
                        </span>
                    </div>
                    <p className="text-5xl sm:text-6xl !leading-tight font-bold text-gray-200 mt-8 text-center">
                        {blog.title}
                    </p>

                    {blog ? <BlogCard content={blog.content} /> : null}
                </div>
            ) : (
                <div className="min-h-screen flex justify-center text-center items-center text-5xl"></div>
            )}

            <button
                className="flex justify-center items-center text-2xl font-medium bg-[#1a1a1a] border rounded-[3px] border-[#333333] mt-10 p-5 hover:bg-[#222222] transition-colors duration-200 cursor-pointer"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <ArrowLeft />
                Back to All Blogs
            </button>
        </section>
    );
}

export default Blogpage;
