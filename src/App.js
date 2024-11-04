import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Recentworks from "./components/Recentworks";
import Clients from "./components/Clients";
import Kindwords from "./components/Kindwords";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

function App() {
  
  return (
    <React.Fragment>
      <Navbar />
      <Herosec />
      <Clients/>
      <Recentworks/>
      <Kindwords/>
      <Aboutme/>
      <Footer/>
      {/* <div className="cont">
      </div> */}
      </React.Fragment>
  );
}

export default App;
