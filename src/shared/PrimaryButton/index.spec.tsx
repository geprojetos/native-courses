import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import PrimaryButton from './index';

describe('[PrimaryButton], test', () => {
  const wrapper = mount(<PrimaryButton />);

  it('[PrimaryButton] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})