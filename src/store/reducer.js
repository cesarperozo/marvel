import {
  SEARCH_CHARACTERS,
  SEARCH_CHARACTER_BY_ID,
  SEARCH_CHARACTER_COMICS_BY_ID,
  SEARCH_CHARACTER_SERIES_BY_ID,
  SEARCH_CHARACTER_STORIES_BY_ID,
  SEARCH_CHARACTER_EVENTS_BY_ID,
  SET_LOADING,
  SET_THEME,
} from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return { ...state, characters: action.characters };

    case SEARCH_CHARACTER_BY_ID:
      return { ...state, character: action.character };

    case SEARCH_CHARACTER_COMICS_BY_ID:
      return {
        ...state,
        comics: action.comics,
      };

    case SEARCH_CHARACTER_SERIES_BY_ID:
      return {
        ...state,
        series: action.series,
      };

    case SEARCH_CHARACTER_STORIES_BY_ID:
      return {
        ...state,
        stories: action.stories,
      };

    case SEARCH_CHARACTER_EVENTS_BY_ID:
      return {
        ...state,
        events: action.events,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};
