import React from 'react';
import './PhotoCard.scss';
import cropText from './utils/cropText';

const Card = ({ media, title, link, author, tags }) => {
  return (
    <div className="card">
      <div className="imgCtnr">
        <img src={media.m} alt={cropText(title)} />
      </div>
      <p className="description">
        {cropText(title)}
        {author ? (
          <React.Fragment>
            {" "}<em>by</em>{" "}
            <a href={link} target="blank">
              {author}
            </a>
          </React.Fragment>
        ) : (
          ''
        )}
      </p>
      {tags && <p className="tags">{tags}</p>}
    </div>
  );
};

export default Card;
