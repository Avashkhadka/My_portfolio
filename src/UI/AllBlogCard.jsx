import React from "react";
import { Link } from "react-router";

function AllBlogCard({ item }) {
    return (
        <Link
            to={`/blog/${item.slug}`}
            className={`group cursor-pointer max-w-300 border rounded-2xl  md:h-[41rem] w-[35rem] md:w-auto overflow-hidden justify-between border-[#333333] `}
            id={`blog${item.id}`}
        >
            <div className="overflow-hidden flex justify-center h-[20rem] min-w-80">
                <img
                    src={`assets/images/${item.img}`}
                    alt=""
                    className={"object-cover"}
                    style={{
                        height: item.classHeight,
                    }}
                />
            </div>
            <div className="p-[4%]  md:px-15 lg:px-4 ]">
                <div className="text-[20px] font-medium transition-all duration-400 group-hover:text-[#5a52ff]">
                    {item.title}
                </div>
                <div className="flex items-center gap-3 text-[#9ca3af] my-6 text-[14px]">
                    <p>{item.published_at}</p>
                    <span className="bg-[#9ca3af] w-1.5 h-1.5 rounded-full "></span>
                    <p>{item.reading_time_minutes} minute read</p>
                </div>
                <div className="text-2xl text-gray-300">
                    {item.subtitle.slice(0, 60)}...
                </div>
            </div>
        </Link>
    );
}

export default AllBlogCard;
