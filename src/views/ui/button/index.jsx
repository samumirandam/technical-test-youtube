import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({
  children,
  className,
  flat,
  primary,
  secondary,
  noStyles,
  onClick,
  dataTestid,
}) => (
  <button
    type="button"
    className={classnames('Button', className, {
      flat,
      primary,
      secondary,
      noStyles,
    })}
    onClick={onClick}
    data-testid={dataTestid}
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
  noStyles: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  dataTestid: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  className: '',
  flat: false,
  primary: false,
  secondary: false,
  noStyles: false,
  dataTestid: '',
};

export default Button;
