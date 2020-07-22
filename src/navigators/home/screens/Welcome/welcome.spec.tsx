import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Welcome from './index';

describe('[Welcome], test', () => {
  const wrapper = mount(<Welcome />);

  it('[Welcome] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})