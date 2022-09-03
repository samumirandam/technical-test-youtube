/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ui/button';

import './video-card.scss';

const VideoCard = ({ image, name }) => (
  // funcion para abrir modal eliminar
  // funcion para abrir modal reproducir
  <div className="VideoCard">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <Button className="VideoCard__delete">X</Button>
  </div>
);

VideoCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

VideoCard.defaultProps = {
  image: '',
  name: '',
};

export default VideoCard;
