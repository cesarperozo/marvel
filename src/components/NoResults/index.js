import React from 'react'
import { Wrapper, ErrorMessage } from './styles';

const NoResults = () => {

  return <Wrapper>
    <ErrorMessage>No results ❌. Please search again.</ErrorMessage>
  </Wrapper>;

};

export default NoResults;
