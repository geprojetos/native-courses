import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

// imports
import homeScreens from './home';
import categoriesScreens from './categories';
import {Text} from 'react-native';

type appNagivatorProps = {
  name: string;
  component: React.FC<{}>;
}[];

type HeaderOptions = {
  back: StackNavigationOptions;
};

export const headerOptions: HeaderOptions = {
  back: {
    header: () => <></>,
    headerLeft: () => <Text>opa</Text>,
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

const appNagivator: appNagivatorProps = [
  // exports
  ...homeScreens,
  ...categoriesScreens,
];

const Stack = createStackNavigator();

const RootNativator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {appNagivator.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={headerOptions.back}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNativator;
