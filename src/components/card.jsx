import React from "react";
import Star from "../assets/Star.png";
import Ellipse from "../assets/Ellipse.png";
export default function Card(props) {

    let badgeText 

    if (props.info.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.info.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="outer-container">
      <div className="card-container">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img className="card-image" src={props.info.coverImg} />
        <div className="card-stats">
          <img className="card-star" src={Star} />
          <p className="card-rating">{props.info.stats.rating}.0</p>
          <p className="card-rating-count gray">({props.info.stats.reviewCount})</p>
          <img className="card-ellipse gray" src={Ellipse} />
          <p className="card-country gray">{props.info.location}</p>
        </div>
        <p className="card-title">{props.info.title}</p>
        <p className="card-price">
          <strong>From ${props.info.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
