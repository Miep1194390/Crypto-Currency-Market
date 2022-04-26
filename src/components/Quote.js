import React from "react";
import "./Quote.css";
import vraag from "../pictures/vraag.png";

function Quote() {
  return (
    <div className="Main3">
      <div className="OuterQuotes">
        <div className="HOuter">
          <h1 className="H1Quote">Joran</h1>
          <h1 className="H2Quote">Equals</h1>
          <h1 className="H3Quote">Backpain</h1>
        </div>
        <div className="OuterImageQuotes">
          <div className="InnerImageQuotes">
            <img src={vraag} alt="Quotes"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
