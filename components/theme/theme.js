import Cookies from 'js-cookie';
import { updateRenderBgColor } from './../threejs/mainScene';

let _currentTheme;

export const LIGHT = 'light';
export const DARK = 'dark';

const THEMES = {
  [LIGHT]: {
    id: LIGHT,
    ['--color-backgroud-0']: '#eceff4',
    ['--color-foregroung-0']: '#2e3440',
    ['--color-foregroung-1']: '#4c566a',
    ['--color-accent-0']: '#5e81ac',
    ['--color-accent-1']: '#d8dee9',
    ['--color-accent-3']: '#ebcb8b',
    ['--color-accent-4']: '#88c0d0',
    ['--theme-blend-mode']: 'multiply',
    ['--theme-blend-mode-2']: 'darken',
  },
  [DARK]: {
    id: DARK,
    ['--color-backgroud-0']: '#2E3440',
    ['--color-foregroung-0']: '#ECEFF4',
    ['--color-foregroung-1']: '#D8DEE9',
    ['--color-accent-0']: '#81A1C1',
    ['--color-accent-1']: '#4C566A',
    ['--color-accent-3']: '#B48EAD',
    ['--color-accent-4']: '#88c0d0',
    ['--theme-blend-mode']: 'screen',
    ['--theme-blend-mode-2']: 'lighten',
  },
};

const updateProp = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

const setTheme = (theme) => {
  Object.keys(theme).forEach((customProp) => {
    if (customProp === 'id') return;
    updateProp(customProp, theme[customProp]);
  });
  const bodyEl = document.querySelector('body');
  bodyEl.setAttribute('data-theme', theme.id);
  _currentTheme = theme.id;
  return _currentTheme;
};

const getThemePreference = () => {
  if (!process.browser) return LIGHT;
  const fromCookie = Cookies.get('theme');
  if(fromCookie) return fromCookie;
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
  return matches ? DARK : LIGHT;
};

export const initTheme = () => {
  if (!process.browser) return;
  const userTheme = getThemePreference();
  setTheme(THEMES[userTheme]);
};

export const toggleTheme = () => {
  if (!process.browser) return '';
  const next = setTheme(_currentTheme === LIGHT ? THEMES[DARK] : THEMES[LIGHT]);
  updateRenderBgColor();
  Cookies.set('theme', next);
  return next;
};
