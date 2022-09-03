/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';

import { render, screen, fireEvent } from '@utils/test-utils';

import Home from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe('Test for Home page component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByTestId('Home')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render add video', () => {
    setup();
    const input = screen.getByPlaceholderText('Añadir');
    expect(input.value).toBe('');
    fireEvent.change(input, {
      target: { value: 'https://www.youtube.com/watch?v=7qRc8DmfamA' },
    });
    expect(input.value).toBe('https://www.youtube.com/watch?v=7qRc8DmfamA');
    expect(screen.getByText('Añadir')).toBeTruthy();
    fireEvent.click(screen.getByText('Añadir'));
    expect(localStorage.VIDEOS).toEqual(JSON.stringify(['7qRc8DmfamA']));
  });

  test('Should render add video error', () => {
    setup();
    const input = screen.getByPlaceholderText('Añadir');
    expect(input.value).toBe('');
    fireEvent.change(input, {
      target: { value: 'https://www.youtube.com/' },
    });
    expect(input.value).toBe('https://www.youtube.com/');
    expect(screen.getByText('Añadir')).toBeTruthy();
    fireEvent.click(screen.getByText('Añadir'));
    expect(screen.getByText('No logramos obtener el video')).toBeTruthy();
  });

  test('Should render video list without errors', () => {
    localStorage.setItem('VIDEOS', JSON.stringify(['7qRc8DmfamA']));
    const props = {
      videoDetail: {
        data: {
          items: [
            {
              snippet: {
                title: 'test video',
                thumbnails: {
                  medium: {
                    url: 'test url',
                  },
                },
              },
            },
          ],
        },
      },
    };
    setup(props);
    expect(screen.getByAltText('test video')).toBeTruthy();
  });

  test('Should render error without errors', () => {
    const props = {
      videoDetail: {
        isError: true,
        errorDetail: 'test error',
      },
    };
    setup(props);
    expect(screen.getByText('test error')).toBeTruthy();
  });

  test('Should render delete video without errors', () => {
    localStorage.setItem('VIDEOS', JSON.stringify(['7qRc8DmfamA']));
    const props = {
      videoDetail: {
        data: {
          items: [
            {
              snippet: {
                title: 'test video',
                thumbnails: {
                  medium: {
                    url: 'test url',
                  },
                },
              },
              id: '7qRc8DmfamA',
            },
          ],
        },
      },
    };
    setup(props);
    expect(screen.getByAltText('test video')).toBeTruthy();
    fireEvent.click(screen.getByTestId('VideoCard__delete'));
    expect(
      screen.getByText('¿Seguro que quieres eliminar este video?'),
    ).toBeTruthy();
    fireEvent.click(screen.getByText('Eliminar'));
    fireEvent.click(screen.getByText('Cancelar'));
    fireEvent.click(screen.getByText('Eliminar'));
  });

  test('Should render click in video', () => {
    localStorage.setItem('VIDEOS', JSON.stringify(['7qRc8DmfamA']));
    const props = {
      videoDetail: {
        data: {
          items: [
            {
              id: '7qRc8DmfamA',
              snippet: {
                title: 'test video',
                thumbnails: {
                  medium: {
                    url: 'test url',
                  },
                },
              },
            },
          ],
        },
      },
    };
    setup(props);
    expect(screen.getByAltText('test video')).toBeTruthy();
    fireEvent.click(screen.getByAltText('test video'));
    fireEvent.click(screen.getByTestId('VideoCard__play'));
    expect(global.window.location.pathname).toEqual('/video/7qRc8DmfamA');
    fireEvent.click(screen.getAllByTestId('close')[1]);
  });
});
