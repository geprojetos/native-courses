// imports
import Welcome from './screens/Welcome';

import {headerOptions} from '../header.constant';
import {appNagivatorProps} from '..';
import {ScreensNames} from '../../utils/screens';

const homeScreens: appNagivatorProps = [
  // export

  {
    name: ScreensNames.welcome,
    component: Welcome,
    options: headerOptions.none
  }
];

export default homeScreens;
