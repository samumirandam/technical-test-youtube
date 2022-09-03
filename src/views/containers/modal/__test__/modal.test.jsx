/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import Modal from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(
    <Modal {...setupStore}>
      <p>modal test</p>
    </Modal>,
    {},
  );
};

describe('Test for Modal component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('modal test')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in button', () => {
    const props = {
      primaryButton: 'test button',
    };
    setup(props);
    fireEvent.click(screen.getByText('test button'));
    fireEvent.click(screen.getByTestId('close'));
    expect(screen.getByText('modal test')).toBeTruthy();
  });
});
