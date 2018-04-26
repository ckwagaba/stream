import { initialState } from '../store/store';

import {
  GET_ACCESS_TOKEN_SUCCESS,
} from '../types';

const accessToken = (state=initialState, action: any) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken
      };
    default:
      return {
        ...state
      };
  }
};

export default accessToken;
