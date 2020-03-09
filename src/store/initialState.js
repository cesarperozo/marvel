import { LIGTH_THEME, LOCALSTORAGE_THEME_KEY } from '../constants/constants';

let theme = LIGTH_THEME;

let themeActive = localStorage.getItem(LOCALSTORAGE_THEME_KEY);
if (themeActive) {
  theme = themeActive;
}

export const initialState = {
  loading: true,
  characters: [],
  character: {},
  comics: [],
  series: [],
  stories: [],
  events: [],
  theme,
};
