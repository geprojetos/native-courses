import i18next from 'i18next';
import {
  // imports
  common,
} from './translations/translations';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    en: {
      // en
      common,
    },
  },
});

function t(key: string, options?: any) {
  if (!!options) {
    return i18next.t(key, options);
  } else {
    return i18next.t(key);
  }
}

export {t};

export default i18next;
