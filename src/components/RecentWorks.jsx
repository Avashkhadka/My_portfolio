import React from "react";

import Rcardcomp from "../UI/RecentWorkCard";

import { works } from "../Data/RecentWorks";
export default function Recentworks({hasAnimated}) {
   

    return (
        <div
            
            className={`Recent-work scrolltotop transition-all duration-500 ${
                hasAnimated.works
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="works"
        >
            <div className="r-header">Recent works</div>
            {works.map((item, index) => {
                return <Rcardcomp key={index} data={item} ind={index + 1} />;
            })}
        </div>
    );
}
