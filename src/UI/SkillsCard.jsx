import React from "react";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

function SkillsCard({ data }) {
    // console.log(data);

    // const iconElement=

    return (
        <div className="skillcard-content">
            <span className="SkillCard-Hover_name">{data.name}</span>
            {/* {iconElement} */}
            {data.name == "MongoDB" ? (
                <DiMongodb size="8.5rem" />
            ) : data.name == "Tailwind CSS" ? (
                <RiTailwindCssFill size="8.5rem" />
            ) : data.name == "My Sql" ? (
                <GrMysql size="8.5rem"/>
            ) : (
                <i className={`${data.icon} text-9xl`}></i>
            )}
        </div>
    );
}

export default SkillsCard;
