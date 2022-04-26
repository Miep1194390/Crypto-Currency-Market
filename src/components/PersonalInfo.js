import React from "react";
import "./PersonalInfo.css";
import ImgSlider from "./ImgSlider";

function PersonalInfo() {
  return (
    <div className="Main2">
      <div className="H1ImgSliderOuter">
        <h1 className="H1ImgSlider">Upcoming Projects...</h1>
      </div>
      <ImgSlider></ImgSlider>
    </div>
  );
}

export default PersonalInfo;
