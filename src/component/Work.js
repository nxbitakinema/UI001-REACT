import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem Ipsum has been the industry's standard dummy dummy dummy dummy dummytext ever since the 1500s",
        },
        {
            image: ChooseMeals,
            title: "ChooseMeals",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            image: DeliveryMeals,
            title: "DeliveryMeals",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
    ]


  return (
    <div className="work-section-wrapper">

        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How it Work</h1>
            <p className="primary-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className="work-section-bottom">
            {
                workInfoData.map( (data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container"><img src = { data.image } /></div>
                        <h2> { data.title } </h2>
                        <p> { data.text } </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
};

export default Work;
