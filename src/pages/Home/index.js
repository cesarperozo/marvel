import React, { useContext } from 'react';

import { store } from '../../store/store';

import Character from '../../components/Character';

import { List } from './styles';
import Loading from '../../components/Loading';
import NoResults from '../../components/NoResults';

const Home = () => {
  const { state } = useContext(store);
  const { characters, loading } = state;

  if (characters.length === 0) {
    if (loading) {
      return <Loading />;
    } else {
      return <NoResults />
    }
  }

  return (
    <List>
      {characters &&
        characters.map((character, index) => {
          return <Character key={index} {...character} />;
        })}
    </List>
  );
};

export default Home;
