import React from "react";
import "./Herothree.css";
function Herothree() {
  const leftData = [
    {
      score: "160%",
      con: "Increase in revenue generated for your business",
    },
    {
      score: "$60K",
      con: "Saved on annual marketing expenditure",
    },
    {
      score: "12",
      con: "hours saved on marketing efforts weekly",
    },
  ];
  return (
    <div className="hero_three container">
      <div className="con_right">
        <h1>Accelerate growth. Maximize savings. Reduce efforts.</h1>
      </div>
      <div className="con_left">
        {leftData.map((dataLeft, index) => (
          <div key={index} className="left_data">
            <h1>{dataLeft.score}</h1>
            <p>{dataLeft.con}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herothree;
