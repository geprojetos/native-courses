// imports
import List from './screens/List';
import {appNagivatorProps} from '..';
import {headerOptions} from '../header.constant';

const categoriesScreens: appNagivatorProps = [
  // export
  {
    name: 'ListCategories',
    component: List,
    options: headerOptions.backDefault,
  },
];

export default categoriesScreens;
