import React from "react";
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">

        <div className="about-background-image-container">
            <img src = { AboutBackground } alt = ""  />
        </div>

        <div className="about-section-image-container">
          <img src = { AboutBackgroundImage } alt = ""  />
        </div>

        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">Food ia an important part of a blanced diet</h1>
          <p className="primary-text">Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p className="primary-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn more</button>
            <button className="watch-video-button">{""}<BsFillPlayCircleFill/>watch video</button>
          </div>

        </div>

    </div>




  )
};

export default About;
