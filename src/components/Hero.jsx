import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.jpg";
import myCv from "../assets/pdf/MYCV.pdf";

export default function Herosec({ hasAnimated }) {
    const roles = ["Web Developer", "UI/UX Designer", "Full-Stack Developer","Backend Developer","Student"];
    const [currentText, setCurrentText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentRole = roles[currentTextIndex];
        if (!isDeleting) {
            // typing
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(
                        currentRole.slice(0, currentText.length + 1)
                    );
                }, typingSpeed);
                return () => {
                    clearTimeout(timeout);
                };
            } else {
                // wait before delete
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(150);
                }, 2000);
                return () => {
                    clearTimeout(timeout);
                };
            }
        } else {
            // deleting
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(
                        currentText.slice(0, currentText.length - 1)
                    );
                }, typingSpeed);
                return () => {
                    clearTimeout(timeout);
                };
            } else {
                // tonextword
                setIsDeleting(false);
                setCurrentTextIndex((prev) => {
                    return (prev + 1) % roles.length;
                });
                setTypingSpeed(100);
            }
        }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed]);

    return (
        <div
            className={`hero-sec scrolltotop transition-all duration-1000 ${
                hasAnimated.hero
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="hero"
        >
            <div className="heroinner">
                <div className="intoduction">
                    <p className="hi">Hello there👋</p>
                    <div>
                        <div className="intro">I'm, Avash</div>
                        <div className="about">{currentText}</div>
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
