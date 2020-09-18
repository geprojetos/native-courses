import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import IconBack from './index';

describe('[IconBack], test', () => {
  const wrapper = mount(<IconBack />);

  it('[IconBack] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})