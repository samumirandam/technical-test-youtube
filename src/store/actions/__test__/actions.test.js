import * as actions from '../index';

import {
  GET_VIDEO_DETAIL_LOADING,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL_ERROR,
} from '../types';

describe('Test for Actions', () => {
  test('Should call getVideoDetailSteps request', () => {
    const expected = {
      type: GET_VIDEO_DETAIL_LOADING,
    };
    expect(actions.getVideoDetailSteps.request()).toEqual(expected);
  });

  test('Should call getVideoDetailSteps success', () => {
    const payload = {};
    const expected = {
      type: GET_VIDEO_DETAIL_SUCCESS,
      payload,
    };
    expect(actions.getVideoDetailSteps.success(payload)).toEqual(expected);
  });

  test('Should call getVideoDetailSteps error', () => {
    const payload = 'test';
    const expected = {
      type: GET_VIDEO_DETAIL_ERROR,
      payload,
    };
    expect(actions.getVideoDetailSteps.error(payload)).toEqual(expected);
  });

  test('Should call getVideoDetailAction', () => {
    const payload = [];
    const dispatch = jest.fn();
    actions.getVideoDetailAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
