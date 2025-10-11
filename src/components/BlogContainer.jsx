import { ChevronDown, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import BlogCard from "../UI/BlogCard";
function BlogContainer() {
    const hasAnimated = useIntersectionObserver();
    const [searchBlogs, setSearchBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [fetchedBlogs, setFetchedBlogs] = useState([]);
    const [noOfVlogs, setNoOfVLogs] = useState("0");
    const [selectTag, setSelectTag] = useState("All");
    const [showTagBox, setShowTagBox] = useState(false);
    const tagArr = [
        { name: "All", active: true },
        { name: "Technology", active: false },
        { name: "Travel", active: false },
        { name: "Entertainment", active: false },
        { name: "Miscellaneous", active: false },
    ];
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const result = await fetch("/assets/json/storedBlogs.json");
                const data = await result.json();
                setFetchedBlogs(data.posts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBlogs();
    }, []);
    useEffect(() => {
        const searchData = () => {
            let filtered = fetchedBlogs;

            // Filter by tag
            if (selectTag !== "All") {
                filtered = filtered.filter((item) => item.tag === selectTag);
            }

            // Filter by search term (if not empty)
            if (searchTerm.trim() !== "") {
                filtered = filtered.filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchTerm.trim().toLowerCase()) ||
                        item.keyterms.some((term) =>
                            term
                                .toLowerCase()
                                .includes(searchTerm.trim().toLowerCase())
                        )
                );
            }

            // Always update state, regardless of searchTerm
            setSearchBlogs(filtered);
            setNoOfVLogs(filtered.length);
        };

        searchData();
    }, [searchTerm, fetchedBlogs, selectTag]);

    const handleTagClick = () => {};
    return (
        <section
            className={`mt-[10rem] px-[6%] md:p-0  flex flex-col items-center transition-all duration-1000 `}
        >
            <div className="max-w-[90.5rem]">
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
                        <div className="flex items-center justify-between px-5 py-4 transition-colors duration-200 hover:bg-[#222222] sm:w-60 ">
                            <p className="text-2xl text-gray-300 cursor-pointer text-nowrap w-50 overflow-hidden ">
                                {selectTag}
                            </p>
                            <ChevronDown className="text-gray-400 h-8" />
                        </div>
                        {showTagBox && (
                            <div className="absolute -bottom-69  w-full bg-[#1a1a1a] border rounded-[3px] border-[#333333] p-3">
                                {tagArr.map((item, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className="text-2xl m p-2 rounded-[3px]  hover:bg-[#222222]"
                                            onClick={() => {
                                                setSelectTag(item.name);
                                            }}
                                        >
                                            {item.name}
                                        </p>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-5 pl-5 text-2xl text-gray-300">
                    {noOfVlogs} Blogs Found
                </div>

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10  ">
                    {searchBlogs.map((item) => {
                        return <BlogCard item={item} key={item.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default BlogContainer;
