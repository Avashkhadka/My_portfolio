import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollPage() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }, [pathname]);
    return null;
}

export default ScrollPage;
