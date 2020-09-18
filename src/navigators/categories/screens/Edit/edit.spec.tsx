import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Edit from './index';

describe('[Edit], test', () => {
  const wrapper = mount(<Edit />);

  it('[Edit] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})