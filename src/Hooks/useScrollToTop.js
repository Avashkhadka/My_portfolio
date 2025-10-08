import { useEffect, useState } from "react";

function useScrollToTop() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    return showScrollToTop;
}

export default useScrollToTop;
