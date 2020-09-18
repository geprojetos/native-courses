import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import List from './index';

describe('[List], test', () => {
  const wrapper = mount(<List />);

  it('[List] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})