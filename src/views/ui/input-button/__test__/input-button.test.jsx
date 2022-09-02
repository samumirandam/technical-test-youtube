/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import InputButton from '../index';

const defaultProps = { labelButton: 'Press' };

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<InputButton {...setupStore} />, {});
};

describe('Test for InputButton ui component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Press')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
