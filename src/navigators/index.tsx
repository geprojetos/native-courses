import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// imports
import homeScreens from './home';
import categoriesScreens from './categories';

type appNagivatorProps = {
  name: string;
  component: React.FC<{}>;
}[];

const appNagivator: appNagivatorProps = [
  // exports
  ...homeScreens,
  ...categoriesScreens,
];

const Stack = createStackNavigator();

const RootNativator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {appNagivator.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNativator;
