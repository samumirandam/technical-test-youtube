import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({
  children, className, flat, primary, secondary, onClick,
}) => (
  <button
    type="button"
    className={classnames('Button', className, {
      flat,
      primary,
      secondary,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flat: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
  className: '',
  flat: false,
  primary: false,
  secondary: true,
};

export default Button;
