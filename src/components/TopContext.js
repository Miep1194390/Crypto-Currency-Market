import React from "react";
import "./TopContext.css";
import mirzaselimovichoofd from "../pictures/mirzaselimovichoofd.png";

function TopContext() {
  return (
    <div className="Main">
    <div className="Header">
      
      <img className="TopContextImg" src={mirzaselimovichoofd} alt="Mirza Selimovic Head"></img>

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#dfe3ee" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,213.3C640,192,800,96,960,69.3C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

  );
}

export default TopContext;
