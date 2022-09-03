// eslint-disable-next-line import/no-unresolved
import { getData } from '@api/get-data';

import {
  GET_VIDEO_DETAIL_LOADING,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL_ERROR,
} from './types';

export const getVideoDetailSteps = {
  request: () => ({
    type: GET_VIDEO_DETAIL_LOADING,
  }),
  success: (payload) => ({
    type: GET_VIDEO_DETAIL_SUCCESS,
    payload,
  }),
  error: (error) => ({
    type: GET_VIDEO_DETAIL_ERROR,
    payload: error,
  }),
};

export const getVideoDetailAction = (payload) => (dispatch) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const ids = payload.join(',');
  getData(dispatch, getVideoDetailSteps, {
    method: `/videos?id=${ids}&key=${API_KEY}&part=snippet`,
  });
};
