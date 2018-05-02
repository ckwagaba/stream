import React from 'react';

// fixtures
import {
  getUserDataResponse,
} from '../fixtures/userData';

// reducer
import user from './userReducer';

// action
import {
  getUserDataSuccess,
} from '../actions/getUserData';

// initial state
import initialState from '../initialState/initialState';

describe('userDataReducer', () => {
  it('should update state with user data from the Login Response when getUserDataSuccess is dispatched', () => {
    const userState = user(initialState.user, getUserDataSuccess(getUserDataResponse));
    expect(userState).toEqual(getUserDataResponse);
  });
});
