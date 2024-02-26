import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import image_one from "./Img/assignment_img.png";
function Hero() {
  return (
    <>
      <header>
        <div className="first">
          <p>
            <span id="red_dot"> </span> Our exclusive beta is live.{" "}
            <span id="sign">
              Sign up for free{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </span>
          </p>
        </div>
        <div className="two">
          <h1>
            <span style={{ color: "#4589ff" }}> Generate leads</span> <br />
            in 3 clicks for your business
          </h1>
          <p>
            Simplify your marketing efforts with AI. Use a collection of
            ready-made, successful marketing <br /> strategies that practically
            run themselves.
          </p>
        </div>
        <div className="third">
          <input type="text" placeholder="Enter your work email" />
          <button>Join the waitlist</button>
          <p id="para">
            Get access to a comprehensive directory of{" "}
            <span style={{ color: "#F18D13" }}>AI Tools </span>and{" "}
            <span style={{ color: "#24a148" }}> ChatGPT Prompts </span>
            to elevate your business.
          </p>
        </div>
      </header>
      <div className="image_overlay">
        <img src={image_one} alt="" />
      </div>
    </>
  );
}

export default Hero;
