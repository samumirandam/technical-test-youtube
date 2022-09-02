/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import { getVideoDetailAction } from '@actions';

import Loader from '@components/loader';
import Error from '@components/error';

import './home.scss';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoDetailAction('7qRc8DmfamA'));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      <p>Home</p>
      {false && <Loader />}
      {false && <Error error={errorDetail || filterError} />}
    </section>
  );
};

export default Home;
