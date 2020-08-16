import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Container from './index';

describe('[Container], test', () => {
  const wrapper = mount(<Container />);

  it('[Container] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})