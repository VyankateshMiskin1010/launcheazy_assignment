import React from "react";
import leftHand from "./Img/leftHand.png";
import "./Herofive.css";
function Herofive() {
  return (
    <div className="five_main">
      <div className="mobileScreenLeftHand">
        <img src={leftHand} alt="" srcset="" />
      </div>
      <h1>
        Say goodbye
        <span id="leftHadnh1">
          <img src={leftHand} alt="leftHand" srcset="" />
        </span>
        to excessive spending on designers, experts, and multiple tools
      </h1>
      <p>Say hello to Launcheazy - your superstar marketer in your pocket!</p>
      <div className="third">
        <input type="text" placeholder="Enter your work email" />
        <button>Join the waitlist</button>
      </div>
    </div>
  );
}

export default Herofive;
