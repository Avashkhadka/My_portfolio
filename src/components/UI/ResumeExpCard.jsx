import React from "react";

function ResumeExpCard({ data }) {
  let curryear = new Date().getFullYear();
  return (
    <div className="ResumeCard">
      <p>
        {data.startTime}-{data.endTime === curryear ? "Current" : data.endTime}
      </p>
      <p>{data.post}</p>

      <ul>
        <li>{data.institution}</li>
      </ul>

      <p>{data.Discription}</p>
    </div>
  );
}

export default ResumeExpCard;
