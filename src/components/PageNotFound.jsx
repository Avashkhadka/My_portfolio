import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-[15rem] font-bold font-[Arial] flex justify-center items-center h-[20rem] text-white">
                404
            </p>
            <p className="text-4xl font-medium text-gray-300 mb-5">Not Found</p>
            <p className="font-medium text-2xl mb-8 text-gray-300">
                The resource requested could not be found on this server!
            </p>
            <button
                className="relative group flex justify-center items-center  text-gray-300 cursor-pointer p-3 text-4xl rounded-full gap-2 w-80   transition-all duration-300 overflow-hidden"
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                }}
            >
                {" "}
                <div className="absolute w-100 bg-red-100 h-full -z-10 bg-[linear-gradient(45deg,rgba(58,29,245,1)_0%,rgba(90,82,255,1)_100%)] group-hover:w-100  transition-all duration-500"></div>
                <ArrowLeft className="  transition-all duration-300 w-0 group-hover:w-10" />
                <p> Return Home</p>
            </button>

            <div className="w-60 h-80 -z-1 bg-[#5a52ff] rounded-full blur-3xl animate-pulse duration-500 absolute"></div>
            <div className="w-10 h-10 -z-1 bg-purple-600 rounded-full animate-float blur-md absolute top-20 right-40"></div>
            <div className="w-10 h-10 -z-1 bg-blue-600 rounded-full animate-float blur-md absolute top-20 left-20" style={{animationDelay:"1s"}}></div>
            <div className="w-10 h-10 -z-1 bg-purple-600 rounded-full animate-float blur-md absolute bottom-20 left-40" style={{animationDelay:"2s"}}></div>
            <div className="w-10 h-10 -z-1 bg-blue-600 rounded-full animate-float blur-md absolute bottom-20 right-20"style={{animationDelay:"1s"}}></div>
        </div>
    );
}

export default PageNotFound;
