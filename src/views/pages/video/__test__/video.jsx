/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import Video from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Video {...setupStore} />, {});
};

describe('Test for Video page component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Url incorrecta')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
