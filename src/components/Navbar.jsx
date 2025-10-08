import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useScrollToSection } from "../Hooks/useScrollToSection";

export default function Navbar() {
    let [navMenuToggle, setnavMenuToggle] = useState(true);
    const navigate = useNavigate();
    const [navReqFromOut, setNavReqFromOut] = useState("");
    useEffect(() => {
        if (navReqFromOut) {
            setTimeout(() => {
                useScrollToSection(
                    navReqFromOut,
                    navigate,
                    closeMobileMenu,
                    setNavReqFromOut,
                    navReqFromOut
                );
            }, 100);
        }
    }, [navReqFromOut]);
    const Handleham = () => {
        if (navMenuToggle === true) {
            setnavMenuToggle(false);
            document.querySelector(".res-nav").style.top = "0%";
        } else {
            setnavMenuToggle(true);
            document.querySelector(".res-nav").style.top = "-120%";
        }
    };

    let Navarr = Array.from(document.querySelectorAll(".res-link-menu"));
    // eslint-disable-next-line
    Navarr.map((item) => {
        item.addEventListener("click", () => {
            setnavMenuToggle(true);
            document.querySelector(".res-nav").style.top = "-120%";
        });
    });
    const closeMobileMenu = () => {
        setnavMenuToggle(false);
    };
    const navItems = [
        { href: "#works", label: "Works" },
        { href: "#services", label: "Services" },
        { href: "#resume", label: "Resume" },
        { href: "#aboutme", label: "About Me" },
        { href: "#contact", label: "Contact" },
    ];
    return (
        <React.Fragment>
            <nav>
                <div className="Navcontainer">
                    <div className="mainnavdata">
                        <span className="scrolllink">
                            <div
                                className="Navtitle"
                                onClick={() => {
                                    navigate("/");
                                    window.scrollTo({
                                        behavior: "smooth",
                                        top: 0,
                                    });
                                }}
                            >
                                Avash Khadka
                            </div>
                        </span>

                        <div className="navlinks">
                            <div className="navlinktype">
                                <span className="scrolllink ">
                                    <div
                                        className="navlink "
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/blog");
                                            setTimeout(() => {
                                                window.scroll({
                                                    top: 0,
                                                    behavior: "smooth",
                                                });
                                            }, 100);
                                        }}
                                    >
                                        Blogs
                                    </div>
                                </span>
                                {navItems.map((item, href) => {
                                    return (
                                        <span
                                            key={href}
                                            className="scrolllink "
                                        >
                                            <div
                                                className="navlink "
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    useScrollToSection(
                                                        item.href,
                                                        navigate,
                                                        closeMobileMenu,
                                                        setNavReqFromOut
                                                    );
                                                    setnavMenuToggle(false);
                                                }}
                                            >
                                                {item.label}
                                            </div>
                                        </span>
                                    );
                                })}

                                {/* <span className="scrolllink ">
                                    <div className="navlink ">Works</div>
                                </span>
                                <span className="scrolllink">
                                    <div className="navlink">Services</div>
                                </span>
                                <span className="scrolllink">
                                    <div className="navlink">Resume</div>
                                </span>
                                <span className="scrolllink">
                                    <div className="navlink">About Me</div>
                                </span>
                                <span className="scrolllink">
                                    <div className="navlink">Contact</div>
                                </span> */}
                            </div>
                        </div>
                    </div>
                    <div className="nav-book">
                        <a href="mailto:avash2063@gmail.com">Book a call</a>
                    </div>
                    <div className="navhamburger" onClick={Handleham}>
                        <i className="fa-solid fa-bars fa-lg hamsize"></i>
                    </div>
                </div>
            </nav>

            <div className={`res-nav z-10011`}>
                <div className="res-nav-link-container">
                    <div className="res-nav-links res-link-menu">
                        <span
                            className="scrolllink"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/blog");
                                setTimeout(() => {
                                    window.scroll({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }, 100);
                            }}
                        >
                            Blogs
                        </span>
                    </div>
                    {navItems.map((item, href) => {
                        return (
                            <div
                                className="res-nav-links res-link-menu"
                                key={href + "1"}
                            >
                                <span
                                    className="scrolllink "
                                    onClick={(e) => {
                                        e.preventDefault();
                                        useScrollToSection(
                                            item.href,
                                            navigate,
                                            closeMobileMenu,
                                            setNavReqFromOut
                                        );
                                        setnavMenuToggle(false);
                                    }}
                                >
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                    {/* <div className="res-nav-links res-link-menu">
                        <span className="scrolllink">Works</span>
                    </div>
                    <div className="res-nav-links res-link-menu">
                        <span className="scrolllink">Services</span>
                    </div>
                    <span className="res-nav-links res-link-menu">
                        <div className="scrolllink">Resume</div>
                    </span>
                    <div className="res-nav-links res-link-menu">
                        <span className="scrolllink">About Us</span>
                    </div>
                    <div className="res-nav-links res-link-menu">
                        <span className="scrolllink">Contact</span>
                    </div> */}
                    <div className="res-nav-connect ">
                        <div className="res-nav-info">
                            <p>
                                <strong>Let's connect!</strong>
                            </p>
                            <p>
                                Do you have any projects in mind? Share them
                                with me, and let's do it.
                            </p>
                        </div>
                        <div className="res-nav-info-footer">
                            <div className="res-nav-bookAcall">
                                <a href="mailto:avash2063@gmail.com">
                                    Book a Call
                                </a>
                            </div>
                            <div className="res-nav-info-availability">
                                <div className="res-nav-info-green-circle"></div>
                                <p>Open to work</p>
                            </div>
                        </div>
                    </div>
                    <div className="res-nav-footer-container">
                        <p>Follow me!</p>
                        <div className="res-nav-footer-follow-links">
                            <div className="res-nav-footer-follow-link">
                                <a href="https://www.linkedin.com/in/avash-khadka-720886308/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                            <div className="res-nav-footer-follow-link">
                                <a href="https://www.instagram.com/aavash.khadka_">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div className="res-nav-footer-follow-link">
                                <a href="https://x.com/avashkhadka10">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                            <div className="res-nav-footer-follow-link">
                                <a href="https://github.com/Avashkhadka">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
