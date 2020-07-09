import 'react-native';
import React from 'react';
import { mount } from 'enzyme';

import Home from './index';

describe('[Home], test', () => {
  const wrapper = mount(<Home />);

it('[Home] renders correctly', () => {
    expect(wrapper.exists());
  });
})