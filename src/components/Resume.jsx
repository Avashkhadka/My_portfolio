import React, { useState } from "react";

import ResumeExpCard from "../UI/ResumeExpCard";
import SkillsCard from "../UI/SkillsCard";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { ResumeDataContainer } from "../Data/Resume";
function Resume({ hasAnimated }) {
    const [currentCompontnt, setCurrentComponent] = useState("Experience");
    const changeComponent = (component, id) => {
        // console.log(component, id);

        setCurrentComponent(component);
        let data = Array.from(
            document.querySelectorAll(".resume-navigation-link")
        );
        data.forEach((element) => {
            element.classList.remove("resume-navigation-link-active");
        });
        data[id].classList.add("resume-navigation-link-active");
        // console.log(data[id].name)
    };

    return (
        <section
            className={`port-section transition-all duration-500 ${
                hasAnimated.resume
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="resume"
        >
            <div className="resume-port-section">
                <div className="clientheader serv-section-header">Resume</div>
                <div className="Resume-container gap-0 sm:gap-[5rem]">
                    <div
                        className={`resume-navigaton transition-all duration-500 ${
                            hasAnimated.resume
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <p className="Resume-navigation-header">Why Hire Me?</p>
                        <p className="Resume-navigation-content">
                            I combine creativity, technical expertise, and a
                            keen eye for detail to deliver standout solutions.
                            Driven by innovation and a commitment to quality, I
                            turn ideas into reality. Let's build something
                            amazing together!
                        </p>
                        <div className="resume-navigation-link-container">
                            {ResumeDataContainer.changeRes.map(
                                (item, index) => (
                                    <button
                                        key={index}
                                        className={`resume-navigation-link transition-all duration-500 ${
                                            hasAnimated[`res${item.name}`]
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-10"
                                        } ${
                                            index == 0
                                                ? "resume-navigation-link-active"
                                                : ""
                                        }`}
                                        name={item.name}
                                        id={`res${item.name}`}
                                        onClick={() => {
                                            changeComponent(item.name, index);
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className="resume-navigation-navs">
                        {currentCompontnt === "Experience" && (
                            <ExperienceComp hasAnimated={hasAnimated} />
                        )}
                        {currentCompontnt === "Education" && (
                            <EducationComp hasAnimated={hasAnimated} />
                        )}
                        {currentCompontnt === "Skills" && (
                            <SkillsComp hasAnimated={hasAnimated} />
                        )}
                        {currentCompontnt === "About Me" && (
                            <AboutmeComp hasAnimated={hasAnimated} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;

export const ExperienceComp = ({ hasAnimated }) => {
    return (
        <div
            className={`experienceComponent transition-all duration-500 ${
                hasAnimated.resumeExp
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="resumeExp"
        >
            <ResumeCompBlueprintHeading
                Pageheading={"Experience"}
                Content={ResumeDataContainer.experienceComp.content}
            />
            <div className="ResumecardContainer">
                {ResumeDataContainer.experienceComp.data.map(
                    (Curritem, index) => {
                        return <ResumeExpCard key={index} data={Curritem} hasAnimated={hasAnimated}/>;
                    }
                )}
            </div>
        </div>
    );
};

export const EducationComp = ({hasAnimated}) => {
    return (
        <div className="educationcomponent">
            <ResumeCompBlueprintHeading
                Pageheading={"Education"}
                Content={ResumeDataContainer.educationComp.content}
            />
            <div className="ResumecardContainer">
                {ResumeDataContainer.educationComp.data.map(
                    (Curritem, index) => {
                        return <ResumeExpCard key={index} data={Curritem} />;
                    }
                )}
            </div>
        </div>
    );
};

export const SkillsComp = () => {
    return (
        <div className="skillcomponent ">
            <ResumeCompBlueprintHeading
                Pageheading={"Skills"}
                Content={ResumeDataContainer.skillsComp.content}
            />
            <div className="resume-skillcomp">
                {ResumeDataContainer.skillsComp.data.map((curritem, index) => {
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
            <ResumeCompBlueprintHeading
                Pageheading={"About"}
                Content={content}
            />
            <div className="Res-AboutmeContainer ">
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
