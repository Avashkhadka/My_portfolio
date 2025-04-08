import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Recentworks from "./components/Recentworks";
import Clients from "./components/Clients";
import Kindwords from "./components/Kindwords";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import useScroll from "./components/useScroll";

function App() {
  // let herotp = useRef()
  // const handlescrolltoup = () => {
  //   herotp.current.scrollIntoView({
  //     behaviour: "smooth",
  //     block: "nearest",
  //   })
  // }

  const [hometp, handleHomeScrolltoup] = useScroll()
  const [workstp, handleWorkScrolltoup] = useScroll()
  const [aboutmetp, handleAboutmeScrolltoup] = useScroll()
  const [contacttp, handleContactScrolltoup] = useScroll()

  return (
    <React.Fragment>


      <Navbar handlescroll={{ handleHomeScrolltoup, handleWorkScrolltoup, handleAboutmeScrolltoup, handleContactScrolltoup }} />
      <Herosec refloc={hometp} />
      <Clients />
      <Recentworks refloc={workstp} />
      <Kindwords />
      <Aboutme refloc={aboutmetp} />
      <Footer refloc={contacttp} />
      {/* <div className="cont">
      </div> */}
      <span onClick={handleHomeScrolltoup}>
        <div className="Gotoup" >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </span>

    </React.Fragment>
  );
}

export default App;
