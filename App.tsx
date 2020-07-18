/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';

import Storybook from './storybook';
import RootNativator from './src/navigators';

const Root: FC = (): React.ReactElement => {
  return <RootNativator />;
};

const STORYBOOK_START = false;
let App: any = null;

STORYBOOK_START ? (App = Storybook) : (App = Root);

export default App;
