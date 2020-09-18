import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from 'react-native';
import IconBack from '../shared/IconBack';
import {colors} from '../../src/utils/styles';

export interface HeaderOptions {
  none: StackNavigationOptions;
  backDefault: StackNavigationOptions;
}

export const headerOptions: HeaderOptions = {
  none: {
    header: () => <></>
  },
  backDefault: {
    headerLeft: () => <IconBack />,
    cardStyle: {
      backgroundColor: colors.WHITE_SECONDARY
    },
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: colors.GRAY_SECONDARY
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      textAlign: 'center',
      color: colors.BLUE_PRIMARY
    }
  }
};
