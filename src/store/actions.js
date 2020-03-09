import {
  SEARCH_CHARACTERS,
  SEARCH_CHARACTER_BY_ID,
  SEARCH_CHARACTER_COMICS_BY_ID,
  SEARCH_CHARACTER_STORIES_BY_ID,
  SEARCH_CHARACTER_SERIES_BY_ID,
  SEARCH_CHARACTER_EVENTS_BY_ID,
  SET_LOADING,
  SET_THEME,
} from './types';

import {
  searchByName,
  searchById,
  searchComicsById,
  searchSeriesById,
  searchStoriesById,
  searchEventsById,
} from '../services/charactersService';

export const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    loading: isLoading,
  };
};

export const setTheme = theme => {
  return {
    type: SET_THEME,
    theme,
  };
};

export const resetCharacters = () => {
  return {
    type: SEARCH_CHARACTERS,
    characters: [],
  };
};

export const searchCharacters = async query => {
  const characters = await searchByName(query);
  return {
    type: SEARCH_CHARACTERS,
    characters,
  };
};

export const searchCharacterById = async id => {
  const character = await searchById(id);
  return {
    type: SEARCH_CHARACTER_BY_ID,
    character,
  };
};

export const searchCharacterComicsById = async id => {
  const comics = await searchComicsById(id);
  return {
    type: SEARCH_CHARACTER_COMICS_BY_ID,
    comics,
  };
};

export const searchCharacterSeriesById = async id => {
  const series = await searchSeriesById(id);
  return {
    type: SEARCH_CHARACTER_SERIES_BY_ID,
    series,
  };
};

export const searchCharacterStoriesById = async id => {
  const stories = await searchStoriesById(id);
  return {
    type: SEARCH_CHARACTER_STORIES_BY_ID,
    stories,
  };
};

export const searchCharacterEventsById = async id => {
  const events = await searchEventsById(id);
  return {
    type: SEARCH_CHARACTER_EVENTS_BY_ID,
    events,
  };
};
