// imports
import Welcome from './screens/Welcome';

import {headerOptions} from '../header.constant';
import {appNagivatorProps} from '..';

const homeScreens: appNagivatorProps = [
  // export

  {
    name: 'Welcome1',
    component: Welcome,
    options: headerOptions.none,
  },
];

export default homeScreens;
