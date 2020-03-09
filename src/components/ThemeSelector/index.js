import React, { useState, useContext } from 'react';
import { LIGTH_THEME, DARK_THEME, LOCALSTORAGE_THEME_KEY } from '../../constants/constants';
import { MoonIcon, SunIcon } from './styles';
import { store } from '../../store/store';
import { setTheme } from '../../store/actions';

const ThemeSelector = () => {
  const { state, dispatch } = useContext(store);
  const { theme } = state;

  const setLightTheme = () => {
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, LIGTH_THEME);
    dispatch(setTheme(LIGTH_THEME));
  };

  const setDarkTheme = () => {
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, DARK_THEME);
    dispatch(setTheme(DARK_THEME));
  };

  if (theme === LIGTH_THEME) {
    return <MoonIcon title="Dark Mode" onClick={setDarkTheme} />;
  }

  return <SunIcon title="Light Mode" onClick={setLightTheme} />;
};

export default ThemeSelector;
