import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Herosec from "./components/Herosec";
import Recentworks from "./components/Recentworks";
import Clients from "./components/Clients";

function App() {
  
  return (
    <React.Fragment>
      <Navbar />
      <Herosec />
      <Clients/>
      <Recentworks/>
      
      <div className="cont">
      </div>
      </React.Fragment>
  );
}

export default App;
