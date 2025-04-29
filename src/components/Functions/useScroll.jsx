import { useRef } from "react";
import { useLocation } from "react-router";

function useScroll() {
  let elementname = useRef();
  const handlescrolltoup = (e) => {
    // e.preventDefault();
    if (elementname.current) {
      elementname.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return [elementname, handlescrolltoup];
}
export default useScroll;

// function to calculate the width and scroll and show the scrollTo top bottom on condition
export const BacktoTop = ({ Scrollbackref }) => {
  const devicecheck = window.innerWidth;
  window.onscroll = function (e) {
    if (window.scrollY >= 322) {
      Scrollbackref.current.style.right = devicecheck >= 720 ? "10rem" : "3rem";
    } else if (window.scrollY >= 322) {
      Scrollbackref.current.style.right = devicecheck >= 450 ? "10rem" : "1rem";
    } else {
      Scrollbackref.current.style.right = "-10rem";
    }
  };
};

export const Getscrolls = () => {
  const [hometp, handleHomeScrolltoup] = useScroll();
  const [workstp, handleWorkScrolltoup] = useScroll();
  const [aboutmetp, handleAboutmeScrolltoup] = useScroll();
  const [contacttp, handleContactScrolltoup] = useScroll();
  const [Servicestp, handleservicesScrolltoup] = useScroll();
  const [Resumetp, handleResumeScrolltoup] = useScroll();
  return [
    hometp,
    handleHomeScrolltoup,
    workstp,
    handleWorkScrolltoup,
    aboutmetp,
    handleAboutmeScrolltoup,
    contacttp,
    handleContactScrolltoup,
    Servicestp,
    handleservicesScrolltoup,
    Resumetp,
    handleResumeScrolltoup,
  ];
};

export const useSeeLocation = () => {
  let location = useLocation();
  return location;
};


    // for checking location and if in home page and at right place then it activate the nav icon 

    