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
                setTobContext((prev) => [
                    ...prev,
                    { name: `${el.innerText}`, href: `${el.id}` },
                ]);
            });
        }, 200);
    }, []);

    return (
        <div>
            <h2
                className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                id="toc_intro"
            >
                📝Introduction
            </h2>
            <p className="text-[16px] text-gray-300 opacity-80  md:opacity-100">
                {content.introduction}
            </p>

            {content.wit ? (
                <div>
                    <h2
                        className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                        id={`toc_wit`}
                    >
                        ❓ What is {content.wit.header}
                    </h2>
                    <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100  flex flex-col gap-2">
                        {content.wit.def}
                        {content.wit.points ? (
                            <ul className="pl-10 sm:pl-15 list-disc">
                                {content.wit.points.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        ) : null}

                        {content.wit.ending ? content.wit.ending : null}
                    </div>
                </div>
            ) : null}

            {content.legalreminder ? (
                <>
                    <h2
                        className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                        id="toc_legal"
                    >
                        ⚖️Legal & Ethical Reminder
                    </h2>
                    <p className="text-[16px] text-gray-300 opacity-80  md:opacity-100">
                        {content.legalreminder}
                    </p>
                </>
            ) : null}

            {content.works ? (
                <>
                    <h2
                        className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                        id="toc_works"
                    >
                        {content.works.header}
                    </h2>
                    <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100  flex flex-col gap-2">
                        {content.works.def}
                        {content.works.points ? (
                            <ul className="pl-10 sm:pl-15 list-disc">
                                {content.works.points.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        ) : null}

                        {content.works.ending ? content.works.ending : null}
                    </div>
                </>
            ) : null}

            {content.protect_type ? (
                <>
                    {" "}
                    <h2
                        className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                        id="toc_protect_types"
                    >
                     {content.protect_type.header}
                    </h2>
                     <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100  flex flex-col gap-2">
                        {content.protect_type.def}
                        {content.protect_type.points ? (
                            <ul className="pl-10 sm:pl-15 list-disc">
                                {content.works.points.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        ) : null}

                        {content.protect_type.ending ? content.protect_type.ending : null}
                    </div>
                </>
            ) : null}


            <>
                {content.tools ? (
                    <div>
                        <h2
                            className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                            id={`toc_tools`}
                        >
                            {content.tools.header}
                        </h2>
                        <div className="text-[16px] text-gray-300 opacity-80  md:opacity-100  flex flex-col gap-2">
                            {content.tools.def}
                            {content.tools.points ? (
                                <ul className="pl-10 sm:pl-15 list-disc">
                                    {content.tools.points.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            ) : null}

                            {content.tools.ending ? content.tools.ending : null}
                        </div>
                    </div>
                ) : null}
            </>

            <>
                {content.conclusion ? (
                    <>
                        <h2
                            className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                            id="toc_conclusion"
                        >
                            ✅ Conclusion
                        </h2>
                        <p className="text-[16px] text-gray-300 opacity-80  md:opacity-100">
                            {content.conclusion}
                        </p>
                    </>
                ) : null}
            </>

            <>
                {" "}
                <h2
                    className="text-[24px] mb-3 sm:mb-0 sm:text-[32px] opacity-90 md:opacity-100 mt-10 font-medium text-gray-200 "
                    id="toc_faq"
                >
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
