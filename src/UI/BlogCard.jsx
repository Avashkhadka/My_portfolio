import React from "react";

function BlogCard({ content }) {
    console.log(content);
    return (
        <div>
            <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 ">
                Introduction
            </h2>
            <p className="text-[16px] text-gray-300 opacity-70 md:opacity-100">{content.introduction}</p>

            {content.wit ? (
                <div>
                    <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 ">
                        What is {content.wit.header}
                    </h2>
                    <p className="text-[16px] text-gray-300 opacity-70 md:opacity-100  flex flex-col gap-2">
                        {content.wit.def}
                        {content.wit.points?
                            <ul className="pl-15 list-disc">
                                {content.wit.points.map((item)=>{
                                    return <li>{item}</li>
                                })}
                            </ul>
                        
                        :null}
                        
                        {content.wit.ending?content.wit.ending:null}
                    </p>
                </div>
            ) : null}
        </div>
    );
}

export default BlogCard;
