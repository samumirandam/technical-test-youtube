/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import InputButton from '../index';

const defaultProps = {
  labelButton: 'Press',
  onClick: jest.fn(),
  placeholderInput: 'Input',
};

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

  test('Should render click in button', () => {
    setup();
    expect(screen.getByText('Press')).toBeTruthy();
    fireEvent.click(screen.getByText('Press'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  test('Should render change input value', () => {
    setup();
    const input = screen.getByPlaceholderText('Input');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'youtube' } });
    expect(input.value).toBe('youtube');
  });
});
