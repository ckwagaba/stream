import React from 'react';
import { shallow } from 'enzyme';

// component
import App from './App.component';

// fixtures
import {
  getUserDataResponse,
} from '../../fixtures/userData';

// store
import store from '../../store/store';

describe('<App />', () => {
  const props = {
    accessToken: getUserDataResponse.accessToken
  };
  const wrapper = shallow(
    <App {...props} store={store} />
  );
  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });
});
