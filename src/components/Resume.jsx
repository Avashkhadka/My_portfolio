import React, { useState } from "react";

import ResumeExpCard from "./UI/ResumeExpCard";
import SkillsCard from "./UI/SkillsCard";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
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
  let content = ` I bring a solid background in front-end development, web design, and creative digital solutions. With experience in HTML, CSS, JavaScript, and React, I’ve developed and maintained several personal and collaborative projects—such as a portfolio website and QR-based house locator. During my 2-month internship at Onedotsolution, I co-developed applications that improved institutional workflows. My work reflects a passion for building digital experiences, continuous learning, and a strong foundation in both design and technical execution.`;

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
    {
      startTime:" July 25th -",
      endTime: " 27th 2025 ",
      post: "Hackathon Organizer",
      institution: "DAV Codefest 48-Hour Hackathon, DAV College",
      Discription: "Contributed to the successful execution of a 48-hour national-level hackathon with 23 teams and a prize pool of NPR 100,000. Worked on writing official letters, contacting colleges, calling teams, and coordinating with sponsors. Designed certificates, banners, and social media posts, and edited promotional videos. Managed the event schedule, stayed on-site to assist participants throughout the event, and supported backstage operations by briefing teams on judging and presentation guidelines.",
    },
    {
      startTime: "July 5th ",
      endTime: " 2025 ",
      post: "Technical Team Member – Esports Event",
      institution: "PUBG Tournament, DAV College",
      Discription: `Served as a key member of the technical team for a PUBG tournament with 50+ participants and a prize pool of NPR 50,000. Created match rooms, streamed games live, acted as a spectator, and updated points in real-time—a highly sensitive and critical responsibility. Before the tournament, managed team communications, collected deposits, finalized match schedules, and assisted with organizing the event structure. Helped maintain fairness, transparency, and a smooth flow throughout the tournament.

`,
    },
    {
      startTime: "Jan 13th ",
      endTime: " 15th 2025",
      post: "Technical & Event Organizer",
      institution: "BCA Futsal Cup, DAV College",
      Discription: "Actively contributed to organizing a futsal tournament by handling both technical and logistical tasks. Recorded detailed match statistics such as scores, goal scorers, and player cards, and managed digital documents to update team standings. Personally visited several colleges to invite teams, hosted the pool selection round, and coordinated the overall schedule. Played a central role in maintaining accurate records and ensuring the tournament was executed smoothly from start to finish.",
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
  let content = `I possess strong skills in front-end development and back-end integration, with experience in HTML, CSS, JavaScript, React, and Bootstrap for creating responsive, visually engaging interfaces. I’m also proficient in PHP and SQL, enabling full-stack web development with efficient database handling. My understanding of UI/UX principles and drive to learn new technologies help me deliver clean, user-friendly digital experiences.`;
  let mySkills = [
    {
      name: "HTML 5",
      icon: <IoLogoHtml5 size="8.5rem" />,
    },
    {
      name: "CSS 3",
      icon: <IoLogoCss3 size="8.5rem" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size="8.5rem" />,
    },
    {
      name: "React.js",
      icon: <FaReact size="8.5rem" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size="8.5rem" />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb size="8.5rem" />,
    },
  ];
  return (
    <div className="skillcomponent">
      <ResumeCompBlueprintHeading Pageheading={"Skills"} Content={content} />
      <div className="resume-skillcomp">
        {mySkills.map((curritem, index) => {
          return <SkillsCard key={index} data={curritem} />;
        })}
      </div>
    </div>
  );
};

export const AboutmeComp = () => {
  let content = `I’m a creative front-end developer and visual designer with a deep interest in technology and user-centered design. Currently studying BSc(Hons) IT, I’m driven by a desire to build sleek, responsive interfaces that are both functional and engaging. With a growing skill set and a curiosity for innovation, I strive to bridge aesthetics and usability in every project I take on.`;
  let date = new Date().getFullYear();
  let myData = [
    { Name: "Avash khadka" },
    { Age: `${date - 2006} Years Old` },
    { City: "Kathmandu" },
    { Experience: `${date - 2023} Years` },
    { Phone: "(+977) 9841286400" },
    { Email: "avash2063@gmail.com" },
    { Gender: "Male" },
    { status: "Single" },
    { Nationality: "Nepali" },
    { FullTime: "Available" },
    { Language: "English, Nepali, Hindi" },
  ];
  return (
    <div className="aboutcomponent">
      {" "}
      <ResumeCompBlueprintHeading Pageheading={"About"} Content={content} />
      <div className="Res-AboutmeContainer">
        {myData.map((curritem, index) => {
          return (
            <div className="Res-aboutmeContent" key={index}>
              <span className="resAboutMeContainerHeading">
                {Object.keys(curritem)}
              </span>{" "}
              {Object.values(curritem)}
            </div>
          );
        })}
      </div>
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
