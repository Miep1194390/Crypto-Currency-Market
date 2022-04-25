import React from "react";
import "./TopContext.css";
import mirzaselimovichoofd from "../pictures/mirzaselimovichoofd.png";

function TopContext() {
  return (
    <div className="Main">
    <div className="Header">
      
      <img src={mirzaselimovichoofd} alt="Mirza Selimovic Head"></img>

      <div>
      <h1 className="HeadH1">About me</h1>
      <h1 className="HeadH2">
        I am a passionate and self-encouraged software-developer. Im looking to
        get my BTEC Level three Extended Diploma. I’m currently searching for an
        internship to work with ReactJS and PhP 8.0+
      </h1>
      <h1 className="HeadReversed">About me</h1>

      </div>
    </div>
    </div>
  );
}

export default TopContext;
