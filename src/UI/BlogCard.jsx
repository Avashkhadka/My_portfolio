import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Faqitem from "./Faqitem";

function BlogCard({ content, setTobContext }) {
    const [isActive, setIsActive] = useState(false);
    const onToggle = (id) => {
        setIsActive((prev) => (prev === id ? false : id));
    };
    useEffect(() => {
        setTimeout(() => {
            setTobContext([]);
            document.querySelectorAll("[id^='toc']").forEach((el) => {
                setTobContext((prev) => [...prev, { name: `${el.innerText}`, href: `${el.id}` }]);
            });
        }, 200);
    }, []);

    return (
        <div>
            <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 " id="toc_intro">
                📝Introduction
            </h2>
            <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100 text-justify space-y-2">{content.introduction && content.introduction.map((para, index) => <p key={index}>{para}</p>)}</div>

            {content.normalContent &&
                content.normalContent.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 " id={`toc_${item.label}`}>
                                {item.header}
                            </h2>
                            <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100  flex flex-col gap-2">
                                <p className="mb-2 text-justify">{item.def}</p>
                                {item.points && item.isPoint ? (
                                    <ul className="pl-10 sm:pl-15 list-disc">
                                        {item.points.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                ) : item.points && !item.isPoint ? (
                                    item.points.map((item, index) => {
                                        return <p className="mb-1 text-justify" key={index}>{item}</p>;
                                    })
                                ) : null}
                                {item.ending ? <p className="mt-0.5 text-justify">{item.ending}</p> : null}
                            </div>
                        </div>
                    );
                })}

            <>
                {content.conclusion ? (
                    <>
                        <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 " id="toc_conclusion">
                            ✅ Conclusion
                        </h2>
                        <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100 text-justify space-y-2">{content.conclusion && content.conclusion.map((para, index) => <p key={index} >{para}</p>)}</div>
                    </>
                ) : null}
            </>
            <>
                <h2 className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 " id="toc_faq">
                    💡Quick FAQ
                </h2>
                <div className="text-[16px] text-gray-100 opacity-80  md:opacity-100  flex flex-col gap-2">
                    {content.faq.map((item, index) => {
                        return (
                            <Faqitem
                                key={index}
                                isActive={isActive === item.id}
                                item={item}
                                setIsActive={() => {
                                    onToggle(item.id);
                                }}
                            />
                        );
                    })}
                </div>
            </>
        </div>
    );
}

export default BlogCard;
