import { ChevronDown } from "lucide-react";
import React from "react";

function Faqitem({ item, isActive, setIsActive }) {
    return (
        <div className="py-5 border-2 border-transparent border-b-[#333333]">
            <div
                className={`group flex justify-between cursor-pointer `}
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                <p
                    className={`transition-all duration-75 border-2 border-transparent group-hover:border-b-[#ffffff] group-hover:opacity-85`}
                >
                    {item.que}
                </p>
                <ChevronDown
                    className={` transition-all duration-500 ${
                        isActive ? "rotate-0" : "rotate-180"
                    }`}
                />
            </div>

            <p
                className={` overflow-hidden transition-all duration-500 pt-2 px-2 ${
                    isActive ? "h-21" : "h-0"
                }`}
            >
                {item.ans}
            </p>
        </div>
    );
}

export default Faqitem;
