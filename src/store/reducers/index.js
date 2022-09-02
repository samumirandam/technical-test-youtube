/* eslint-disable import/no-unresolved */
import {
  GET_VIDEO_DETAIL_LOADING,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL_ERROR,
} from '@actions/types';

export const initialState = {
  videoDetail: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: {},
    errorDetail: null,
  },
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_DETAIL_LOADING: {
      return {
        ...state,
        videoDetail: {
          ...initialState.videoDetail,
          isLoading: true,
        },
      };
    }
    case GET_VIDEO_DETAIL_SUCCESS: {
      return {
        ...state,
        videoDetail: {
          ...initialState.videoDetail,
          isSucces: true,
          data: action.payload,
        },
      };
    }
    case GET_VIDEO_DETAIL_ERROR: {
      return {
        ...state,
        videoDetail: {
          ...initialState.videoDetail,
          isError: true,
          errorDetail: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
