import React, { useState } from "react";

export default function Navbar({ handlescroll }) {
  let { handleHomeScrolltoup, handleWorkScrolltoup, handleAboutmeScrolltoup, handleContactScrolltoup, handleservicesScrolltoup, handleResumeScrolltoup } = handlescroll
  let [navMenuToggle, setnavMenuToggle] = useState(true);

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

  return (
    <React.Fragment>
      <nav>
        <div className="Navcontainer" >
          <div className="mainnavdata">
            <span className="scrolllink" onClick={handleHomeScrolltoup}>
              <div className="Navtitle">Avash Khadka</div>
            </span>

            <div className="navlinks">
              <div className="navlinktype">
                <span className="scrolllink " onClick={handleWorkScrolltoup}>
                  <div className="navlink ">Works</div>
                </span>
                <span className="scrolllink" onClick={handleservicesScrolltoup}>
                  <div className="navlink">Services</div>
                </span>
                <span className="scrolllink" onClick={handleResumeScrolltoup}>
                  <div className="navlink">Resume</div>
                </span>
                <span className="scrolllink" onClick={handleAboutmeScrolltoup}>
                  <div className="navlink">About Me</div>
                </span>
                <span className="scrolllink" onClick={handleContactScrolltoup}>
                  <div className="navlink">Contact</div>
                </span>
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

      <div className={`res-nav`}>
        <div className="res-nav-link-container">
          <div className="res-nav-links res-link-menu">
            <span className="scrolllink" onClick={handleWorkScrolltoup}>Works</span>
          </div>
          <div className="res-nav-links res-link-menu">
            <span className="scrolllink" onClick={handleservicesScrolltoup}>Services</span>
          </div>
          <span className="res-nav-links res-link-menu" onClick={handleResumeScrolltoup}>
            <div className="scrolllink">Resume</div>
          </span>
          <div className="res-nav-links res-link-menu">
            <span className="scrolllink" onClick={handleAboutmeScrolltoup}>About Us</span>
          </div>
          <div className="res-nav-links res-link-menu">
            <span className="scrolllink" onClick={handleContactScrolltoup}>Contact</span>
          </div>
          <div className="res-nav-connect ">
            <div className="res-nav-info">
              <p>
                <strong>Let's connect!</strong>
              </p>
              <p>
                Do you have any projects in mind? Share them with me, and let's
                do it.
              </p>
            </div>
            <div className="res-nav-info-footer">
              <div className="res-nav-bookAcall">
                <a href="mailto:avash2063@gmail.com">Book a Call</a>
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
