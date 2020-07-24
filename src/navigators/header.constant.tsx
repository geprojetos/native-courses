import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from 'react-native';
import IconBack from '../shared/IconBack';

export interface HeaderOptions {
  none: StackNavigationOptions;
  backDefault: StackNavigationOptions;
}

export const headerOptions: HeaderOptions = {
  none: {
    header: () => <></>,
  },
  backDefault: {
    headerLeft: () => <IconBack />,
    cardStyle: {
      backgroundColor: 'white',
    },
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: `black`,
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      textAlign: 'center',
    },
  },
};
