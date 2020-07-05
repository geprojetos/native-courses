import 'react-native';
import React from 'react';
import About from './index';
import renderer from 'react-test-renderer';

it('[About] renders correctly', () => {
  renderer.create(<About />);
});
