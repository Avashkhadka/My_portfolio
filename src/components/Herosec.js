import React from "react";
import hero from "../images/hero.jpg";

export default function Herosec() {
  return (
    <div className="hero-sec">
      <div className="heroinner">
        <div className="intoduction">
          <p className="hi">Hello there👋</p>
          <div>
            <div className="intro">I'm, Avash</div>
            <div className="about">Web Developer</div>
          </div>
          <div className="disc">
            <div className="discin">
              <div>More than 1 years of experience </div>
              <div> designing</div>
            </div>
            high-quality websites for businesses
          </div>
          <div className="actbtn">

          <div className="action-hero1">
            <div className="nav-book1 inqury1">
              <a href="/">Send inquiry</a>
            </div>
          </div>
          </div>
        </div>

        <img src={hero} alt="" />
      </div>
    </div>
  );
}
