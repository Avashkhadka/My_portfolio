import React from "react";

function ResumeExpCard({ data, hasAnimated }) {
    let curryear = new Date().getFullYear();

    // console.log(hasAnimated)
    return (
        <div
            className={`ResumeCard`}
            id={`res${data.post.length}`}
        >
            <p>
                {data.startTime}-
                {data.endTime === curryear ? "Current" : data.endTime}
            </p>
            <p>{data.post}</p>

            <ul className="list-disc">
                <li>{data.institution}</li>
            </ul>

            <p>{data.Discription}</p>
        </div>
    );
}

export default ResumeExpCard;
