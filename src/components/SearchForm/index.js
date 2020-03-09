import React, { useState, useContext, useEffect } from 'react';
import { store } from '../../store/store';
import { searchCharacters, setLoading, resetCharacters } from '../../store/actions';

import { InputContainer, SearchIcon, SearchInput } from './styles';
import { useHistory } from 'react-router-dom';

const avengers = ['Iron Man', 'Thor', 'Hulk', 'Captain America', 'Black Widow'];

function getRandomAvenger() {
  return avengers[Math.floor(Math.random() * avengers.length)];
}


const SearchForm = () => {
  let history = useHistory();
  const { dispatch } = useContext(store);

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const action = await searchCharacters(getRandomAvenger());
      dispatch(action);
    };
    fetchData();
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const search = async () => {
    if (query !== '') {
      history.push('/');

      dispatch(setLoading(true));
      dispatch(resetCharacters());
      const action = await searchCharacters(query);
      dispatch(setLoading(false));

      dispatch(action);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <InputContainer>
      <SearchIcon onClick={search} />
      <SearchInput
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </InputContainer>
  );
};

export default SearchForm;
