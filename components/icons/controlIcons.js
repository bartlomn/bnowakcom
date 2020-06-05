import { useState, useEffect, useReducer } from 'react';
import { IconSun, IconMoon } from './icons';
import IconButton from './../iconButton';
import { LIGHT, toggleTheme } from './../theme/theme';

import { iconContainer, icon } from './controlIcons.scss';

const clickHandler = (setTheme) => () => {
  setTheme(toggleTheme());
};

const ControlIcons = () => {
  if (!process.browser) return null;
  const [theme, setTheme] = useState(undefined);
  const hmm = useState(null)[1];
  useEffect(() => {
    requestAnimationFrame(() => {
      setTheme(document.querySelector('body').getAttribute('data-theme'));
    });
  });

  return (
    <div id="control-icons" className={iconContainer} aria-hidden="true">
      <IconButton
        icon={theme === LIGHT ? <IconMoon /> : <IconSun />}
        onClick={clickHandler(setTheme)}
      />
    </div>
  );
};

export default ControlIcons;
