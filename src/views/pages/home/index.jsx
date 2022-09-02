/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import { getVideoDetailAction } from '@actions';

import Loader from '@components/loader';
import Error from '@components/error';
import { useDispatch } from 'react-redux';

import InputButton from '@ui/input-button';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoDetailAction('7qRc8DmfamA'));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      <h1 className="Home__title">Añadir nuevo video</h1>
      <InputButton
        className="Home__input"
        placeholderInput="Añadir"
        labelButton="Añadir"
      />
      {false && <Loader />}
      {false && <Error error="errorDetail" />}
    </section>
  );
};

export default Home;
