import React from 'react';
import PropTypes from 'prop-types';

import './video-list.scss';

const VideoList = ({ children }) => (
  <section className="VideoList">{children}</section>
);

VideoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default VideoList;
