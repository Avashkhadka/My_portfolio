import React from "react";
// import hero from "../images/hero.png";`
import hero from "../images/hero.jpg";
import myCv from "../images/MYCV.pdf";

export default function Herosec({refloc}) {
  return (
    <div className="hero-sec scrolltotop"  id="home" ref={refloc}>
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
              <a href={myCv} className="" download="Cv.pdf">
                <div className="nav-book1 download-resume inqury1">
                  Download Resume
                </div>
              </a>
            </div>
          </div>
        </div>

        <img src={hero} alt="" />
      </div>
    </div>
  );
}
