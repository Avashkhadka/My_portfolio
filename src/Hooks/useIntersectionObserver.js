import { useEffect, useState } from "react";

export const useIntersectionObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        setHasAnimated((prev) => {
                            return { ...prev, [entry.target.id]: true };
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll("[id]").forEach((el) => {
            observer.observe(el);
        });
        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);

    return hasAnimated;
};
