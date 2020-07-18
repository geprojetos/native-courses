import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// imports
import homeRoutes from './home';

type appNagivatorProps = (
  | {
      name: string;
      component: ({navigation}: any) => JSX.Element;
    }
  | {
      name: string;
      component: () => JSX.Element;
    }
)[];

const appNagivator: appNagivatorProps = [
  // exports
  ...homeRoutes,
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
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNativator;
