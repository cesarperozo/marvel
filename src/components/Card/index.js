import React from 'react';
import { CardWrapper, CardTitle } from './styles';

const Card = ({ children, title, id }) => {
  return (
    <CardWrapper id={id}>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardWrapper>
  );
};

export default Card;
