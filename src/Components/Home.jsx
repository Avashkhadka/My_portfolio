import React, { useState } from "react";
import Herosec from "./Hero";
import Aboutme from "./Aboutme";
import Clients from "./Clients";
import Recentworks from "./RecentWorks";
import Myservices from "./Myservices";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import Resume from "./Resume";
import Kindwords from "./Kindwords";
function Home() {
    const hasAnimated = useIntersectionObserver();
    return (
        <>
            <Herosec hasAnimated={hasAnimated} />
            <Clients hasAnimated={hasAnimated} />
            <Recentworks hasAnimated={hasAnimated} />
            <Myservices hasAnimated={hasAnimated} />
            <Resume hasAnimated={hasAnimated} />
            <Kindwords hasAnimated={hasAnimated} />
            <Aboutme hasAnimated={hasAnimated} />
        </>
    );
}

export default Home;
