import React from 'react';
import './PhotoCard.scss';
import cropText from './utils/cropText';
const Card = ({
  media,
  title,
  link,
  author,
  tags,
  useLarge = false,
  animate = true
}) => {
  const displayImage = animate ? media.animate : media.still;
  return (
    <div className={`card ${useLarge ? 'large' : ''}`}>
      <div className="imgCtnr">
        <img
          src={useLarge ? displayImage.l : displayImage.m}
          alt={cropText(title)}
        />
      </div>
      <p className="description">
        {cropText(title)}
        {author ? (
          <React.Fragment>
            {' '}
            <em>by</em>{' '}
            <a href={link} target="blank">
              {author}
            </a>
          </React.Fragment>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default Card;
