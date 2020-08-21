// imports
import List from './screens/List';
import {ScreensNames} from '../../utils/screens';
import {headerOptions} from '../header.constant';

const coursesScreens = [
  // export

  {
    name: ScreensNames.listCourses,
    component: List,
    options: headerOptions.backDefault,
  },
];

export default coursesScreens;
