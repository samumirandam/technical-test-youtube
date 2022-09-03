/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ui/button';

import './video-card.scss';

const VideoCard = ({
  image,
  name,
  onClickDelete,
  canDelete,
  onClickOpen,
  hasIcon,
}) => (
  <div className="VideoCard">
    <Button noStyles onClick={onClickOpen}>
      <figure>
        <img src={image} alt={name} />
      </figure>
    </Button>
    {canDelete && (
      <Button
        className="VideoCard__delete"
        onClick={onClickDelete}
        dataTestid="VideoCard__delete"
      >
        X
      </Button>
    )}
    {hasIcon && (
      <Button
        className="VideoCard__icon-play"
        onClick={onClickOpen}
        dataTestid="VideoCard__icon-play"
      >
        ►
      </Button>
    )}
  </div>
);

VideoCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  onClickDelete: PropTypes.func,
  canDelete: PropTypes.bool,
  onClickOpen: PropTypes.func,
  hasIcon: PropTypes.bool,
};

VideoCard.defaultProps = {
  image: '',
  name: '',
  onClickDelete: () => {},
  canDelete: false,
  onClickOpen: () => {},
  hasIcon: false,
};

export default VideoCard;
