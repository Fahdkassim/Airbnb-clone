import React from "react";
import image from "../assets/HeroImage.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={image} rel="hero image" className="hero-image" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
