import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from 'react-native';

export interface HeaderOptions {
  back: StackNavigationOptions;
}

export const headerOptions: HeaderOptions = {
  back: {
    header: () => <></>,
    headerLeft: () => <Text></Text>,
    headerTitle: () => <></>,
    cardStyle: {
      backgroundColor: 'white',
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderBottomColor: `blue`,
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  },
};
