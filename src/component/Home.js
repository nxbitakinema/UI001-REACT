import React from 'react';
import NavBar from './NavBar';
import BannerBackgroundImage from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">

        <NavBar/>

        <div className="home-banner-container">


          <div className="home-bannerImage-container"> 
            <img src = { BannerBackgroundImage } alt = "" />
          </div>


          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favorite Food Delivered Hot & fresh
            </h1>
            <p className="primary-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
          </div>

          <div className="home-image-container">
            <img src = { BannerImage } alt = "" />
          </div>


        </div>
    </div>
  )
}

export default Home