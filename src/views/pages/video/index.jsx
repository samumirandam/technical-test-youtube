/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUndo } from 'react-icons/fa';

import Button from '@ui/button';

import './video.scss';

const Video = () => {
  const navigate = useNavigate();
  const { idVideo } = useParams();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className="Video">
      <Button secondary onClick={handleClick} className="Video__button">
        <FaUndo className="Video__icon" />
        Volver
      </Button>
      <iframe
        src={`https://www.youtube.com/embed/${idVideo}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </section>
  );
};

export default Video;
