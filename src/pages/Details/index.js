import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { store } from '../../store/store';
import {
  searchCharacterById,
  searchCharacterComicsById,
  searchCharacterSeriesById,
  searchCharacterStoriesById,
  searchCharacterEventsById,
} from '../../store/actions';

import CharacterHeader from '../../components/CharacterHeader';
import Loading from '../../components/Loading';
import ComicList from '../../components/ComicList';
import SeriesList from '../../components/SeriesList';
import StoryList from '../../components/StoryList';
import EventList from '../../components/EventList';

const Details = () => {
  let { id } = useParams();
  const { dispatch, state } = useContext(store);
  const { character, comics, series, stories, events } = state;

  useEffect(() => {
    const fetchData = async () => {
      const characterAction = await searchCharacterById(id);
      const comicsAction = await searchCharacterComicsById(id);

      dispatch(characterAction);
      dispatch(comicsAction);

      const seriesAction = await searchCharacterSeriesById(id);
      dispatch(seriesAction);

      const storiesAction = await searchCharacterStoriesById(id);
      dispatch(storiesAction);

      const eventsAction = await searchCharacterEventsById(id);
      dispatch(eventsAction);
    };
    fetchData();
  }, [id]);

  const isEmpty = Object.entries(character).length === 0;

  if (isEmpty) {
    return <Loading />;
  }

  return (
    <>
      <CharacterHeader {...character} />
      <ComicList list={comics} />
      <SeriesList list={series} />
      <StoryList list={stories} />
      <EventList list={events} />
    </>
  );
};

export default Details;
