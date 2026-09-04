import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollPage() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    }, [pathname]);
    return null;
}

export default ScrollPage;
