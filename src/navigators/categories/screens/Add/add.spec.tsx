import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Add from './index';

describe('[Add], test', () => {
  const wrapper = mount(<Add />);

  it('[Add] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})