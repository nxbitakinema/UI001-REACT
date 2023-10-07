import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">

        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="heading">What they are Saying</h1>
            <p className="primary-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className="testimonial-section-bottom">
            <img src = { ProfilePic } alt = "" />
            <p className="primary-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className="testimonial-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>Somchai Chaisom</h2>
        </div>
    </div>
  )
};

export default Testimonial;
