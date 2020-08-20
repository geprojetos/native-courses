import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Title from './index';

describe('[Title], test', () => {
  const wrapper = mount(<Title />);

  it('[Title] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})