import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TeamCard(props) {
  return (
    <div className="t-card">
      <div className="t-card-img-container"> {/* Circular div container */}
        <img src={props.img} alt={props.name} className="t-card-img" />
      </div>
      <p className="t-card-name">{props.name}</p>
      <p className="t-card-title">{props.title}</p>
      <p className="t-card-stars">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#F7BB50", paddingRight: "6px" }}
        />
        {props.stars}
        <span className="t-card-reviews"> ({props.reviews})</span>
      </p>
    </div>
  );
}

export default TeamCard;