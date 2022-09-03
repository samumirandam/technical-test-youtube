/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ui/button';

import './input-button.scss';

const InputButton = ({
  className, placeholderInput, labelButton, onClick,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classnames('InputButton', className)}>
      <input
        className="InputButton__input"
        placeholder={placeholderInput}
        type="text"
        autoComplete="true"
        onChange={handleChange}
        value={inputValue}
      />
      <Button
        className="InputButton__button"
        primary
        onClick={() => onClick(inputValue)}
      >
        {labelButton}
      </Button>
    </div>
  );
};

InputButton.propTypes = {
  className: PropTypes.string,
  placeholderInput: PropTypes.string,
  labelButton: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

InputButton.defaultProps = {
  className: '',
  placeholderInput: '',
  labelButton: '',
};

export default InputButton;
