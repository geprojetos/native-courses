import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import ListItem from './index';

describe('[ListItem], test', () => {
  const wrapper = mount(<ListItem />);

  it('[ListItem] renders correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
})