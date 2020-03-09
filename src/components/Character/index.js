import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, Card, Image, Name } from './styles';

const Character = props => {
  const imgSrc = `${props.thumbnail.path}.${props.thumbnail.extension} `;
  return (
    <CardWrapper>
      <Card>
        <Link to={`/details/${props.id}`}>
          <Image src={imgSrc}></Image>
        </Link>
        <Name>{props.name}</Name>
      </Card>
    </CardWrapper>
  );
};

export default Character;
