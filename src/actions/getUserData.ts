import axios from 'axios';

// action types
import {
  GET_USER_DATA_SUCCESS,
} from '../types';

// interfaces
import {
  IUser,
} from '../interfaces/app';

export const getUserData = () => {
  // we do the twitter stuff here
  // console.log('OAuth Here...');
  return ((dispatch: any) => {
    return axios({
      method: 'get',
      url: 'https://api.twitter.com/oauth/request_token'
    })
    .then((response) => {
      console.log(response);
      // async?
      // load localStorage?
      dispatch(getUserDataSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  });
};

export const getUserDataSuccess = (getUserDataResponse: IUser) => {
  return {type: GET_USER_DATA_SUCCESS, getUserDataResponse}
};
