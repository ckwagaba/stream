import initialState from '../initialState/initialState';

// interfaces
import {
  IGetUserDataSuccess,
} from '../interfaces/actions';

import {
  IUser,
} from '../interfaces/app';

// action types
import {
  GET_USER_DATA_SUCCESS,
} from '../types';

const user = (state: IUser = initialState.user, action: IGetUserDataSuccess) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        ...action.getUserDataResponse,
      };
    default:
      return {
        ...state
      };
  }
};

export default user;
