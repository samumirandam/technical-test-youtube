/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@ui/button';

import './modal.scss';

const Modal = ({
  children,
  isOpen,
  closeModal,
  primaryButton,
  secondaryButton,
  primaryAction,
}) => (
  <div className={classnames('Modal', { open: isOpen })}>
    <div className="Modal__container">
      <div className="Modal__header">
        <Button flat onClick={closeModal} className="Modal__header-button">
          X
        </Button>
      </div>
      <div className="Modal__body">{children}</div>
      <div className="Modal__footer">
        {secondaryButton && (
          <Button onClick={closeModal} secondary>
            {secondaryButton}
          </Button>
        )}
        {primaryButton && (
          <Button onClick={primaryAction} primary>
            {primaryButton}
          </Button>
        )}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  primaryButton: PropTypes.string,
  secondaryButton: PropTypes.string,
  primaryAction: PropTypes.func,
};

Modal.defaultProps = {
  children: '',
  isOpen: false,
  primaryButton: '',
  secondaryButton: '',
  primaryAction: () => {},
};

export default Modal;
