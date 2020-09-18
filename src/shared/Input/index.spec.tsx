import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Input from './index';

describe('[Input], test', () => {
  const wrapper = mount(<Input />);

  it('[Input] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})