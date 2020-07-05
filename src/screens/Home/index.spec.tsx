import 'react-native';
import React from 'react';
import Home from './index';
import renderer from 'react-test-renderer';

it('[Home] renders correctly', () => {
  renderer.create(<Home />);
});
