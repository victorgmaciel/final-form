import en from './en-us.json'

type Locale = 'en';

const locales = { en };

let currentLocale: Locale = 'en';

export const setLocale = (locale: Locale) => {
  currentLocale = locale;
};

export const t = (key: keyof typeof en): string => {
  return locales[currentLocale][key] || key;
};
