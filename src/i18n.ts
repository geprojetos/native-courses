import i18next from 'i18next';
import {
  // imports
  categories,
  home,
  common,
} from './translations/translations';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      // en
      categories,
      home,
      common
    }
  }
});

function t(key: string, options?: any) {
  if (!!options) {
    return i18next.t(key, options);
  }
  return i18next.t(key);
}

export {t};

export default i18next;
