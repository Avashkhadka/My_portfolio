import "./App.css";
import React, { useRef} from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Recentworks from "./components/Recentworks";
import Clients from "./components/Clients";
import Kindwords from "./components/Kindwords";
import Aboutme from "./components/Aboutme";
import Footer, { GoToTop } from "./components/Footer";
import { BacktoTop, Getscrolls } from "./components/Functions/useScroll";
import Myservices from "./components/Myservices";
import Resume from "./components/Resume";
import { Addclasstolink } from "./components/Addclasstolink";




function Homepage() {
    const [hometp, handleHomeScrolltoup, workstp, handleWorkScrolltoup, aboutmetp, handleAboutmeScrolltoup, contacttp, handleContactScrolltoup, Servicestp, handleservicesScrolltoup, Resumetp,] = Getscrolls();
    const Scrollbackref = useRef()

    return (
        <React.Fragment>
            <Addclasstolink/>
            <BacktoTop Scrollbackref={Scrollbackref} />
            <Navbar handlescroll={{ handleHomeScrolltoup, handleWorkScrolltoup, handleAboutmeScrolltoup, handleContactScrolltoup, handleservicesScrolltoup }} />
            <Herosec refloc={hometp} />
            <Clients />
            <Recentworks refloc={workstp} />
            <Myservices refloc={Servicestp} handlescroll={handleHomeScrolltoup} />
            <Resume refloc={Resumetp} />
            <Kindwords />
            <Aboutme refloc={aboutmetp} />
            <Footer refloc={contacttp} />
            <GoToTop refloc={Scrollbackref} handlescroll={handleHomeScrolltoup} />
        </React.Fragment>
    );
}

export default Homepage;
