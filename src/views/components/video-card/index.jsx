/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ui/button';

import './video-card.scss';

const VideoCard = ({ image, name, onClickDelete }) => (
  <div className="VideoCard">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <Button
      className="VideoCard__delete"
      onClick={onClickDelete}
      dataTestid="VideoCard__delete"
    >
      X
    </Button>
  </div>
);

VideoCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  onClickDelete: PropTypes.func.isRequired,
};

VideoCard.defaultProps = {
  image: '',
  name: '',
};

export default VideoCard;
