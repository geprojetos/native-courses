// imports
import Add from './screens/Add';
import Edit from './screens/Edit';
import {appNagivatorProps} from '..';
import {headerOptions} from '../header.constant';
import {ScreensNames} from '../../utils/screens';
import List from './screens/List';

const categoriesScreens: appNagivatorProps = [
  // export

  {
    name: ScreensNames.addCategories,
    component: Add,
    options: headerOptions.backDefault,
  },
  {
    name: ScreensNames.editCategories,
    component: Edit,
    options: headerOptions.backDefault,
  },
  {
    name: ScreensNames.listCategories,
    component: List,
    options: headerOptions.backDefault,
  },
];

export default categoriesScreens;
