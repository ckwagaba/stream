import axios from 'axios';

// action types
import {
  GET_ACCESS_TOKEN_SUCCESS,
} from '../types';

export const getAccessToken = () => {
  // we do the twitter stuff here
  return ((dispatch: any) => {
    return dispatch(getAccessTokenSuccess('uz4DfCxDNz4fX7LUzc3eXICYW'));
  });
};

export const getAccessTokenSuccess = (accessToken: any) => {
  return {type: GET_ACCESS_TOKEN_SUCCESS, accessToken}
};
