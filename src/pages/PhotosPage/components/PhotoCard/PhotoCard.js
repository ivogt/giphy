import React from "react";
import "./PhotoCard.scss";
import cropText from "./utils/cropText";


const Card = ({ key, media, title, link, author, tags }) => {
  return (
    <div key={key} className="card">
      <div className="imgCtnr">
        <img src={media.m} />
      </div>
      <p className="description">
        {cropText(title)} <em>by</em>{" "}
        <a href={link} target="blank">
          {author}
        </a>
      </p>
      <p className="tags">{tags}</p>
    </div>
  );
};

export default Card;
