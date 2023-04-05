import React from "react";
import "./HeroStyles.css";
import heroImg from "../../assets/rino-featured-main-banner-bg.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="" id="heroImg" />
    </div>
  );
};

export default Hero;
