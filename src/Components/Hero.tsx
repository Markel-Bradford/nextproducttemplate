"use client"

import React from "react";
import "../Styles/Hero.css"
import PreloadImage from "./PreloadImage";


const Hero = () => {
  const imageUrl = "/shadesmodel.png"

  return (
    <div className="hero-container">
      {/* Preload the image */}
      <PreloadImage src={imageUrl} />
      <div className="hero-text">
        <h1 className="hero-title">Platinum Threads</h1>
        <p className="hero-sub">Let your style shine</p>
      </div>
      <div className="hero-img">
        <img src={imageUrl} alt="Model with shades" className="hero-photo" />
      </div>
    </div>
  );
};

export default Hero;
