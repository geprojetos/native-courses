import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Paragraph from './index';

describe('[Paragraph], test', () => {
  const wrapper = mount(<Paragraph />);

  it('[Paragraph] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})