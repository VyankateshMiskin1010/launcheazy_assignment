import React from "react";
import "./Herotwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Herotwo() {
  // eslint-disable-next-line no-unused-vars
  const cardDataArray = [
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage1.png",
      top_title: "CAMPAIGNS",
      title: "Attract potential clients",
      description:
        "Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery channels.",
      view_all: "View all Campaigns",
    },
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage3.png",
      top_title: "WORKFLOWS",
      title: "Convert prospects into profits",
      description:
        "Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion.",
      view_all: "View all Workflows",
    },
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage2.png",
      top_title: "PROGRAMS",
      title: "Retain existing customers",
      description:
        "Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs.",
      view_all: "View all Programs",
    },
    // Add more card data objects as needed
  ];

  return (
    <main className="large-container">
      <div className="content container">
        <div className="part_one">
          <p>MARKETING RECIPES</p>
          <h1>Attract. Convert. Retain</h1>
          <h4>
            A library of ready-to-use marketing campaigns, workflows and
            programs to accelerate your growth, maximize savings and reduce
            efforts.
          </h4>
          <h5>
            Visit the library <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </h5>
        </div>
        <div className="card_con">
          {cardDataArray.map((cardData, index) => (
            <div key={index} className="card container">
              <img
                src={cardData.imageUrl}
                alt="CardImage"
                className="card-image"
              />
              <div className="card-content">
                <p className="top_title">{cardData.top_title}</p>
                <h2 className="card-title">{cardData.title}</h2>
                <p className="card-description">{cardData.description}</p>
                <p className="view_all">
                  {cardData.view_all}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Herotwo;
