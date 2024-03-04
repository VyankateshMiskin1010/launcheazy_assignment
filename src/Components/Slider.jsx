// CustomSlider.jsx
import React, { useState } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import img1 from "./Img/Slider_One.png";
import img2 from "./Img/Slider_two.png";
import img3 from "./Img/Slider_three.png";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleButtonClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const sliderRef = React.createRef();

  const sliderSettings = {
    ref: sliderRef,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isHovered,
    autoplay: false,
    infinite: false,
    variableWidth: false,
    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
  };

  const containerStyle = {
    width: isHovered ? "80%" : "100%",
    transition: "width 0.5s ease-in-out",
  };

  const innerSliderStyle = {
    width: isHovered ? "70%" : "80%",
    bottom: isHovered ? "15%" : "25%",
  };

  const getParagraphContent = () => {
    switch (currentSlide) {
      case 0:
        return "Explore AI-recommended marketing recipes to effectively market your business";
      case 1:
        return "Auto-generate conversion focussed content for ready-to-use marketing recipes with AI";
      case 2:
        return "Execute the campaign in a click and let AI handle the scheduling and optimization";
      default:
        return "Click a button to explore";
    }
  };

  return (
    <div
      className="outer-container"
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="background-image">
        <SlickSlider
          {...sliderSettings}
          className="inner-slider"
          style={innerSliderStyle}
        >
          <div className="slider-item">
            <img src={img1} alt="Image1" />
          </div>
          <div className="slider-item">
            <img src={img2} alt="Image2" />
          </div>
          <div className="slider-item">
            <img src={img3} alt="Image3" />
          </div>
        </SlickSlider>
        {isHovered && (
          <div className="controls-container">
            <p className="slider-paragraph">{getParagraphContent()}</p>
            <div>
              <button onClick={() => handleButtonClick(0)}>Explore</button>
              <button onClick={() => handleButtonClick(1)}>Personalized</button>
              <button onClick={() => handleButtonClick(2)}>Execute</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSlider;
