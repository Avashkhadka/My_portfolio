import React from "react";

export default function Navbar() {
  const Handleham = () => {
    document.querySelector(".res-nav").classList.toggle("hideshow");
    window.scrollBy(0,-10000);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="Navcontainer">
          <div className="mainnavdata">
            <div className="Navtitle">
              <a href="/">Avash Khadka</a>
            </div>
            <div className="navlinks">
              <div className="navlinktype">
                <div className="navlink">
                  <a href="/">Works</a>
                </div>
                <div className="navlink">
                  <a href="/">About Me</a>
                </div>
                <div className="navlink">
                  <a href="/">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-book">
            <a href="/">Book a call</a>
          </div>
          <div className="navhamburger" onClick={Handleham}>
            <i className="fa-solid fa-bars fa-lg hamsize"></i>
          </div>
        </div>
      </nav>

      <div className="res-nav">
        <div className="res-navContainer">
          <div className="res-link">
            <a href="/">Works</a>
          </div>
          <div className="res-link">
            <a href="/">About Us</a>
          </div>
          <div className="res-link">
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
