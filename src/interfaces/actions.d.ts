// types
import {
  GET_USER_DATA_SUCCESS,
} from '../types';

// interfaces
import {
  IUser,
} from './app';

export interface IGetUserDataSuccess {
  type: GET_USER_DATA_SUCCESS;
  getUserDataResponse: IUser;
}
