import React from "react";
import "./Quote.css";
import vraag from "../pictures/vraag.png";

function Quote() {
  return (
    <div className="Main3">
      <div className="OuterQuotes">
        <div className="HOuter">
          <h1 className="H1Quote">Mirza's</h1>
          <h1 className="H2Quote">Upcoming</h1>
          <h1 className="H3Quote">Projects</h1>
        </div>
        <div className="OuterImageQuotes">
          <div className="InnerImageQuotes">
            {/* <img src={vraag} alt="Quotes"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
