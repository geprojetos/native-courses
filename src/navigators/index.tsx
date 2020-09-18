import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

// imports
import coursesScreens from './courses';
import categoriesScreens from './categories';
import homeScreens from './home';

export type appNagivatorProps = {
  name: string;
  component: React.FC<{}>;
  options?: StackNavigationOptions;
}[];

const appNagivator: appNagivatorProps = [
  // exports
  ...homeScreens,
  ...categoriesScreens,
  ...coursesScreens,
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
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNativator;
