/* eslint-disable import/no-unresolved */
import {
  GET_VIDEO_DETAIL_LOADING,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL_ERROR,
} from '@actions/types';

import reducer, { initialState } from '../index';

describe('Test for Reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get video detail loading', () => {
    const payload = {};
    const action = {
      type: GET_VIDEO_DETAIL_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      videoDetail: {
        ...initialState.videoDetail,
        isLoading: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get video detail success', () => {
    const payload = {};
    const action = {
      type: GET_VIDEO_DETAIL_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      videoDetail: {
        ...initialState.videoDetail,
        isSucces: true,
        data: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get video detail error', () => {
    const payload = {};
    const action = {
      type: GET_VIDEO_DETAIL_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      videoDetail: {
        ...initialState.videoDetail,
        isError: true,
        errorDetail: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
