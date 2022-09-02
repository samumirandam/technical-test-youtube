/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ui/button';

import './input-button.scss';

const InputButton = ({ className, placeholderInput, labelButton }) => (
  <div className={classnames('InputButton', className)}>
    <input
      className="InputButton__input"
      placeholder={placeholderInput}
      type="text"
      autoComplete
    />
    <Button className="InputButton__button" primary onClick={() => {}}>
      {labelButton}
    </Button>
  </div>
);

InputButton.propTypes = {
  className: PropTypes.string,
  placeholderInput: PropTypes.string,
  labelButton: PropTypes.string,
};

InputButton.defaultProps = {
  className: '',
  placeholderInput: '',
  labelButton: '',
};

export default InputButton;
