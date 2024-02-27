import React from "react";
import "./Herofour.css";
import rocket from "./Img/rocket.png";
function Herofour() {
  return (
    <div className="four_main">
      <div className="four_con">
        <div className="four_right">
          <h4>MARKETING TOOLS</h4>
          <h1>
            Skyrocket{" "}
            <span id="rocket">
              <img src={rocket} alt="" srcset="" />
            </span>{" "}
            <br />
            your growth with advanced marketing tools
          </h1>
          <p>
            A library of ready-to-use marketing campaigns, workflows and
            programs to accelerate your growth, maximize savings and reduce
            efforts.
          </p>
        </div>
        <div className="four_left">
          <div className="four_left_first">
            <div className="four_left_first_txt">
              <h1>Reputation Management</h1>
              <p>Improve online reputation and business listings.</p>
            </div>
          </div>
          <div className="four_left_second">
            <div className="four_left_second_txt">
              <h1>Smart Inbox</h1>
              <p>
                Manage customer conversations from every channel in a single,
                easy-to-use inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herofour;
