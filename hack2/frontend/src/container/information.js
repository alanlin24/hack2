/****************************************************************************
  FileName      [ information.js ]
  PackageName   [ src ]
  Author        [ Chin-Yi Cheng ]
  Synopsis      [ display the information of restaurant ]
  Copyright     [ 2022 11 ]
****************************************************************************/

import React from "react";
import Stars from "../components/stars";
import "../css/restaurantPage.css";

const Information = ({ info, rating }) => {
  const getTag = (tags) => {
    console.log(tags);
    return (
      <>
        {tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </>
    );
  };
  const getPriceTag = (price) => {
    let priceText = "";
    for (let i = 0; i < price; i++) priceText += "$";
    return (
      <div className="tag" key={priceText}>
        {priceText}
      </div>
    );
  };

  const getBusiness = (time) => {
    const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
    return (
      <div className="businessTime">
        {"All" in time ? (
          <div className="singleDay">
            <div className="day">All</div>
            <div className="time">{time["All"]}</div>
          </div>
        ) : (
          days.map((day) => {
            return (
              <div className="singleDay">
                <div className="day">{day}</div>
                <div className="time">{time[day] ?? "Closed"}</div>
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="infoContainer">
      <h2>{info.name}</h2>
      <div className="infoRow">
        <div className="rate">
          {rating === 0 ? (
            <p>No Rating</p>
          ) : (
            <Stars rating={rating} displayScore={true} />
          )}
        </div>
        <div className="distance">{info.distance / 1000} km</div>
      </div>
      <div className="infoRow">
        {getPriceTag(info.price)}
        {getTag(info.tag)}
      </div>
      <h5>Business hours:</h5>
      {getBusiness(info.time)}
    </div>
  );
};
export default Information;
