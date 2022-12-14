/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@containers/layout';

import Home from '@pages/home';
import Video from '@pages/video';
import NotFound from '@pages/not-found';

import '@styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="video/:idVideo" element={<Video />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
