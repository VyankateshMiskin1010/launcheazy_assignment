import React from "react";
import "./Herofour.css";
import rocket from "./Img/rocket.png";

function Herofour() {
  const tools = [
    {
      heading: "Reputation Management",
      description: "Improve online reputation and business listings.",
      width: "42vw",
      height: "22vw",
      backgroundColor: "#a6c8ff",
      borderradius: "16px",
      padding: "1vw",
    },
    {
      heading: "Smart Inbox",
      description:
        "Manage customer conversations from every channel in a single, easy-to-use inbox.",
      width: "42vw",
      height: "22vw",
      backgroundColor: "#FEC57B",
      borderradius: "16px",
      padding: "1vw",
      marginTop: "1vw",
    },
    {
      heading: "Social Media Management",
      description:
        "Manage your social media profiles and paid ads from a single intuitive view.",
      width: "42vw",
      height: "22vw",
      backgroundColor: "#6FDC8C",
      borderradius: "16px",
      padding: "1vw",
      marginTop: "1vw",
    },
    {
      heading: "Marketing Plan",
      description: "Run your entire marketing on autopilot.",
      width: "42vw",
      height: "22vw",
      backgroundColor: "#FFB3B8",
      borderradius: "16px",
      padding: "1vw",
      marginTop: "1vw",
    },
    {
      heading: "Unified Reporting",
      description: "Track ROI on every dollar spend.",
      width: "42vw",
      height: "22vw",
      backgroundColor: "#E0E0E0",
      borderradius: "16px",
      padding: "1vw",
      marginTop: "1vw",
    },
  ];
  return (
    <div className="four_main large-container">
      <div className="four_con container">
        <div className="four_right">
          <h4>MARKETING TOOLS</h4>
          <h1>
            Skyrocket{" "}
            <span id="rocket">
              <img src={rocket} alt="" srcSet="" className="rocket_up" />
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
          <div className="four_left_content">
            <div className="four_left_first">
              {tools.map((dataTools, index) => (
                <div
                  style={{
                    backgroundColor: dataTools.backgroundColor,
                    minHeight: dataTools.height,
                    width: dataTools.width,
                    padding: dataTools.padding,
                    borderRadius: dataTools.borderradius,
                    marginTop: dataTools.marginTop,
                  }}
                  key={index}
                  className="four_left_first_txt"
                >
                  <h1>{dataTools.heading}</h1>
                  <p>{dataTools.description}</p>
                </div>
              ))}
            </div>
            {/* <div className="four_left_second">
              <div className="four_left_second_txt">
                <h1>Smart Inbox</h1>
                <p>
                  Manage customer conversations from every channel in a single,
                  easy-to-use inbox.
                </p>
              </div>
            </div>
            <div className="four_left_third">
              <div className="four_left_second_txt">
                <h1>Smart Inbox</h1>
                <p>
                  Manage customer conversations from every channel in a single,
                  easy-to-use inbox.
                </p>
              </div>
            </div>{" "}
            <div className="four_left_four">
              <div className="four_left_second_txt">
                <h1>Smart Inbox</h1>
                <p>
                  Manage customer conversations from every channel in a single,
                  easy-to-use inbox.
                </p>
              </div>
            </div>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herofour;
