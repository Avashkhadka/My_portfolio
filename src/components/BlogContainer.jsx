import { Check, ChevronDown, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import AllBlogCard from "../UI/AllBlogCard";
function BlogContainer() {
    const hasAnimated = useIntersectionObserver();
    const [searchBlogs, setSearchBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [fetchedBlogs, setFetchedBlogs] = useState([]);
    const [noOfVlogs, setNoOfVLogs] = useState("0");
    const [selectTag, setSelectTag] = useState("All");
    const [showTagBox, setShowTagBox] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const tagArr = [
        { name: "All" },
        { name: "Technology" },
        { name: "Travel" },
        { name: "Entertainment" },
        { name: "Miscellaneous" },
    ];
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                const result = await fetch("/assets/json/storedBlogs.json");
                const data = await result.json();
                setFetchedBlogs(data.posts);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBlogs();
    }, []);
    useEffect(() => {
        const SearchData = () => {
            let filtered = fetchedBlogs;
            if (selectTag !== "All") {
                filtered = filtered.filter((item) => item.tag == selectTag);
            }
            if (searchTerm.trim() !== "") {
                filtered = filtered.filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchTerm.trim().toLocaleLowerCase()) ||
                        item.keyterms.some((term) =>
                            term
                                .toLowerCase()
                                .includes(searchTerm.trim().toLowerCase())
                        )
                );
            }
            setSearchBlogs(filtered);
            setNoOfVLogs(filtered.length);
        };
        SearchData();
    }, [searchTerm, selectTag, fetchedBlogs]);

    return (
        <section
            className={`mt-[8rem] px-[6%] md:p-0  flex flex-col items-center transition-all duration-500 ${
                hasAnimated.blogHome
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="blogHome"
        >
            <div className="max-w-[90.5rem] animate-fade-in-up">
                <h1 className="text-[32px] text-center font-medium mb-4">
                    Blogs
                </h1>
                <p className="text-[18px]  md:p-0 text-justify">
                    Welcome to my blog! Since 2025, I’ve been sharing insights
                    on web development, blogging, and technology. Use the search
                    below to explore posts by title.
                </p>
                <div className="block sm:flex sm:gap-3">
                    <div className="mt-10 bg-[#1a1a1a] border rounded-[3px] border-[#333333] grow flex items-center px-5 py-3 gap-3">
                        <label htmlFor="blogSearchBox">
                            <Search className="text-gray-400 cursor-pointer h-8 " />
                        </label>
                        <input
                            id="blogSearchBox"
                            type="text"
                            placeholder="Search blogs"
                            value={searchTerm}
                            onChange={handleChange}
                            className="appearance-none outline-none text-2xl h-12 w-full"
                            autoComplete="off"
                        />
                    </div>
                    <div
                        className="group relative mt-4 sm:mt-10 bg-[#1a1a1a] border rounded-[3px] border-[#333333] flex flex-col justify-center cursor-pointer z-10  "
                        onClick={() => {
                            setShowTagBox(!showTagBox);
                        }}
                    >
                        <div className="flex items-center justify-between px-5 py-4 transition-colors duration-200  sm:w-63 ">
                            <p className="text-2xl text-gray-300 cursor-pointer text-nowrap w-50 overflow-hidden ">
                                {selectTag}
                            </p>
                            <ChevronDown className="text-gray-400 h-8" />
                        </div>
                        {showTagBox && (
                            <div className="absolute -bottom-69  w-full bg-[#1a1a1a] border rounded-[3px] border-[#333333] p-3">
                                {tagArr.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`text-2xl m p-2 rounded-[3px] flex justify-between hover:bg-[#222222] `}
                                            onClick={() => {
                                                setSelectTag(item.name);
                                            }}
                                        >
                                            <p>{item.name}</p>
                                            {item.name == selectTag && (
                                                <Check className="text-gray-400 h-8" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-5 pl-5 text-[1.3rem] text-gray-300">
                    {noOfVlogs} Blogs Found
                </div>

                {!isLoading ? (
                    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10  ">
                        {searchBlogs.map((item) => {
                            return <AllBlogCard item={item} key={item.id} />;
                        })}
                    </div>
                ) : (
                    <div className="max-w-[90.5rem] mt-14 mb-330 flex flex-col justify-center items-center gap-4 p-20 border rounded-[3px] border-[#333333] border-dashed w-full">
                        <p className=" text-4xl text-gray-400  text-center">
                            Loading...
                        </p>
                    </div>
                )}
            </div>
            {!noOfVlogs && (
                <div className="max-w-[90.5rem] flex flex-col justify-center items-center gap-4 p-20 border rounded-[3px] border-[#333333] border-dashed w-full">
                    <p className=" text-3xl text-gray-400  text-center">
                        {searchTerm
                            ? `No posts found matching "${searchTerm}" under "${selectTag}" Category`
                            : `No posts found  under "${selectTag}" Category`}
                    </p>
                    <button
                        className="outline-none  text-blue-400 text-2xl underline cursor-pointer"
                        onClick={() => {
                            setSearchTerm("");
                            setSelectTag("All");
                        }}
                    >
                        Clear search
                    </button>
                </div>
            )}
        </section>
    );
}

export default BlogContainer;
