import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

function BlogMain() {
    const navigate=useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-5xl sm:text-7xl font-bold font-[Arial] flex justify-center items-center h-[10rem] text-white">
                Under Construction
            </p>
            <p className="text-4xl font-medium text-gray-300 mb-5">
                Stay tuned
            </p>
            <p className="font-medium text-2xl mb-8 text-gray-300">
                Check back soon for updates.
            </p>
            <button
                className="relative group flex justify-center items-center  text-gray-300 cursor-pointer p-3 text-4xl rounded-full gap-2 w-80   transition-all duration-300 overflow-hidden"
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                }}
            >
                {" "}
                <div className="absolute w-100 bg-red-100 -z-10 h-full bg-[linear-gradient(45deg,rgba(58,29,245,1)_0%,rgba(90,82,255,1)_100%)] group-hover:w-100  transition-all duration-500"></div>
                <ArrowLeft className="  transition-all  duration-300 w-0 group-hover:w-10" />
                <p className=""> Return Home</p>
            </button>
        </div>
    );
}

export default BlogMain;
