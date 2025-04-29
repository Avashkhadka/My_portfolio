import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import ResumeExpCard from "./UI/ResumeExpCard";

function Resume({ refloc }) {
  const [currentCompontnt, setCurrentComponent] = useState("experience");
  const changeComponent = (component, id) => {
    // console.log(id)
    setCurrentComponent(component);
    let data = Array.from(document.querySelectorAll(".resume-navigation-link"));
    data.forEach((element) => {
      element.classList.remove("resume-navigation-link-active");
    });
    data[id].classList.add("resume-navigation-link-active");
    // console.log(data[id].name)
  };

  return (
    <div className="port-section" ref={refloc}>
      <div className="resume-port-section">
        <div className="clientheader serv-section-header">Resume</div>
        <div className="Resume-container">
          <div className="resume-navigaton">
            <p className="Resume-navigation-header">Why Hire Me?</p>
            <p className="Resume-navigation-content">
              I combine creativity, technical expertise, and a keen eye for
              detail to deliver standout solutions. Driven by innovation and a
              commitment to quality, I turn ideas into reality. Let's build
              something amazing together!
            </p>
            <div className="resume-navigation-link-container">
              <button
                className="resume-navigation-link resume-navigation-link-active"
                name="experience"
                onClick={() => {
                  changeComponent("experience", 0);
                }}
              >
                Experience
              </button>

              <button
                className="resume-navigation-link"
                name="education"
                onClick={() => {
                  changeComponent("education", 1);
                }}
              >
                Educataion
              </button>
              <button
                className="resume-navigation-link"
                name="skills"
                onClick={() => {
                  changeComponent("skills", 2);
                }}
              >
                skills
              </button>
              <button
                className="resume-navigation-link"
                name="about"
                onClick={() => {
                  changeComponent("about", 3);
                }}
              >
                About Me
              </button>
            </div>
          </div>
          <div className="resume-navigation-navs">
            {currentCompontnt === "experience" && <ExperienceComp />}
            {currentCompontnt === "education" && <EducationComp />}
            {currentCompontnt === "skills" && <SkillsComp />}
            {currentCompontnt === "about" && <AboutmeComp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

export const ExperienceComp = () => {
  let content = ` I offer a well-rounded background in front-end development, web design, and creative graphics. My 3-month part-time experience as a graphic designer at Sajha Entrance allowed me to develop strong visual storytelling and project coordination skills. I’ve also independently created and maintained projects like my personal portfolio site, demonstrating solid command over HTML, CSS, and JavaScript. My journey reflects a strong drive for innovation, continuous growth, and producing meaningful digital experiences.`;

  const data = [
    {
      startTime: 2024,
      endTime: 2024,
      post: "Fullstack Developer",
      institution: "Onedotsolution",
      Discription: `Developed a "Student Management" system for a client with a friend, using HTML, CSS, JavaScript, PHP, and MySQL to manage
student data, attendance, and performance. This project strengthened my end-to-end development and teamwork skills.`,
    },
    {
      startTime: 2024,
      endTime: 2024,
      post: "Fullstack Developer",
      institution: "Diyo Saving and Credit Cooperative Pvt. Ltd",
      Discription: `Developed a website for Diyo Saving and Credit Cooperative Pvt. Ltd., improving their online presence and user experience. Utilized
HTML, CSS, and JavaScript to create a responsive and functional platform tailored to the cooperative’s needs.
`,
    },
  ];

  return (
    <div className="experienceComponent">
      <ResumeCompBlueprintHeading
        Pageheading={"Experience"}
        Content={content}
      />
      <div className="ResumecardContainer">
        {data.map((Curritem, index) => {
          return <ResumeExpCard key={index} data={Curritem} />;
        })}
      </div>
    </div>
  );
};

export const EducationComp = () => {
  let data = [
    {
      startTime: 2024,
      endTime: 2027,
      post: "BCA",
      institution: "Dav College",
      Discription: `I am currently pursuing a Bachelor's in Computer Applications (BCA) at DAV College, affiliated with Tribhuvan University. The program is helping me build strong skills in software development, programming, databases, and networking, preparing me for a career in the tech industry.`,
    },
    {
      startTime: 2022,
      endTime: 2024,
      post: "+2",
      institution: "Dav College",
      Discription: `I completed my +2 (Higher Secondary Education) in the Management stream.
It provided foundational knowledge in business, accounting, and economics.
This background strengthened my communication, critical thinking, and organizational skills.`,
    },
  ];
  let content = `I am currently pursuing a Bachelor's degree in Computer Applications (BCA) at DAV College, affiliated with Tribhuvan University. I completed my +2 education at Nepal Kasthamandap College, Kathmandu, Nepal, where I built a solid foundation in business studies, accounting, and economics. My education continues to strengthen my passion for software development and technical skills.`;
  return (
    <div className="educationcomponent">
      <ResumeCompBlueprintHeading Pageheading={"Education"} Content={content} />
      <div className="ResumecardContainer">
        {data.map((Curritem, index) => {
          return <ResumeExpCard key={index} data={Curritem} />;
        })}
      </div>
    </div>
  );
};

export const SkillsComp = () => {
  let content = `this is my component`;
  return (
    <div className="skillcomponent">
      {" "}
      <ResumeCompBlueprintHeading Pageheading={"Skills"} Content={content} />
    </div>
  );
};

export const AboutmeComp = () => {
  let content = `this is my component`;
  return (
    <div className="aboutcomponent">
      {" "}
      <ResumeCompBlueprintHeading Pageheading={"About"} Content={content} />
    </div>
  );
};

export const ResumeCompBlueprintHeading = ({ Pageheading, Content }) => {
  return (
    <div className="rescomponentHeading">
      <h2 className="Res-compHeading">
        {Pageheading === "About" ? (
          <>
            {Pageheading} <span>Me</span>
          </>
        ) : (
          <>
            MY <span>{Pageheading}</span>
          </>
        )}
      </h2>
      <p>{Content}</p>
    </div>
  );
};
