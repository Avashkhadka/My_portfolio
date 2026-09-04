import React, { useEffect, useRef } from "react";
import useScrollToTop from "../Hooks/useScrollToTop";

function ShowScrollToTop() {
    const Scrollbackref = useRef();
    const showScrollToTop = useScrollToTop();
    // console.log(showScrollToTop);
    const handlescroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        // Scrollbackref.current.style.right = "-10rem";

        // console.log("hi");
    };
    const devicecheck = window.innerWidth;

    if (Scrollbackref.current) {
        if (showScrollToTop) {
            if (window.scrollY >= 322) {
                Scrollbackref.current.style.right =
                    devicecheck >= 720 ? "10rem" : "3rem";
            } else if (window.scrollY >= 322) {
                Scrollbackref.current.style.right =
                    devicecheck >= 450 ? "10rem" : "1rem";
            }
        } else {
            Scrollbackref.current.style.right = "-10rem";
        }
    }

    return (
        <div
            className="Gotoup cursor-pointer"
            ref={Scrollbackref}
            onClick={handlescroll}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    );
}

export default ShowScrollToTop;
