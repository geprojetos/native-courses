// imports
import {appNagivatorProps} from '..';
import {headerOptions} from '../header.constant';
import {ScreensNames} from '../../utils/screens';
import List from './screens/List';

const categoriesScreens: appNagivatorProps = [
  // export
  {
    name: ScreensNames.listCategories,
    component: List,
    options: headerOptions.backDefault
  }
];

export default categoriesScreens;
