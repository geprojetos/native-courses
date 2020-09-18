// imports
import Add from './screens/Add';
import Edit from './screens/Edit';
import List from './screens/List';
import {ScreensNames} from '../../utils/screens';
import {headerOptions} from '../header.constant';

const coursesScreens = [
  // export

  {
    name: ScreensNames.addCoruses,
    component: Add,
  },
  {
    name: ScreensNames.editCourses,
    component: Edit,
    options: headerOptions.backDefault,
  },
  {
    name: ScreensNames.listCourses,
    component: List,
    options: headerOptions.backDefault,
  },
];

export default coursesScreens;
