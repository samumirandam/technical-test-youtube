/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import VideoCard from '../index';

const defaultProps = {
  name: 'test image',
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<VideoCard {...setupStore} />, {});
};

describe('Test for VideoCard component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByAltText('test image')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in button', () => {
    const props = {
      canDelete: true,
    };
    setup(props);
    fireEvent.click(screen.getByAltText('test image'));
    fireEvent.click(screen.getByTestId('VideoCard__delete'));
    expect(screen.getByAltText('test image')).toBeTruthy();
  });
});
