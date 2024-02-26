import React from "react";
import "./Herotwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function Herotwo() {
  // eslint-disable-next-line no-unused-vars
  const cardDataArray = [
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage1.png",
      top_title: "CAMPAIGNS",
      title: "Attract potential clients",
      description:
        "Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery across channels.",
    },
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage3.png",
      top_title: "Campaigns",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageUrl: "https://launcheazy.com/images/homepage/cardImage2.png",
      top_title: "Campaigns",
      title: "Card 2",
      description: "Description for Card 2",
    },
    // Add more card data objects as needed
  ];

  return (
    <main>
      <div className="content">
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
            <div key={index} className="card">
              <img
                src={cardData.imageUrl}
                alt="CardImage"
                className="card-image"
              />
              <div className="card-content">
                <p className="top_title">{cardData.top_title}</p>
                <h2 className="card-title">{cardData.title}</h2>
                <p className="card-description">{cardData.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Herotwo;
