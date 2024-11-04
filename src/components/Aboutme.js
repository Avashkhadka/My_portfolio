import React from "react";
import mypfp from "../images/hero.jpg";
function Aboutme() {
  let lable = ["Web App", "Product Design", "Interactive Prototype", "Backend Dev","Database","Website"];

  return (
    <div className="aboutme-container">
      <p className="aboutme-aboutme-title">About Me</p>
      <div className="aboutme-details">
        <div className="aboutme-right">
          <div className="aboutme-title">
            From Curiosity to Code: My Journey in Frontend Development!
          </div>
          <div className="aboutme-para">
            I'm Avash Khadka, a frontend developer from Nepal with a year of
            experience in creating engaging web applications. My journey began
            in class 8 when I discovered HTML, igniting my curiosity about web
            design. Since then, I've dedicated myself to mastering web
            development, continually refining my skills.
          </div>
          <div className="aboutme-para">
            A year ago, I embraced React, which enabled me to build dynamic user
            interfaces and complete various projects. Each project has enhanced
            my problem-solving skills and deepened my understanding of creating
            seamless user experiences.
          </div>
          <div className="aboutme-para last-para">
            I also focus on making my projects visually appealing and
            user-friendly. I'm excited about the future of web development and
            eager to create meaningful digital experiences while pushing my
            skills further with every project.
          </div>
          <div className="aboutme-label-container">
            {lable.map((item, index) => {
              return <Labledivs item={item} key={index}/>;
            })}
          </div>
        </div>
        <div className="aboutme-left">
          <div className="aboutme-image-container">
            <img src={mypfp} alt="my pfp" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Labledivs = (props) => {
  return (
    <div className="Label">
      <p>{props.item}</p>
    </div>
  );
};

export default Aboutme;
