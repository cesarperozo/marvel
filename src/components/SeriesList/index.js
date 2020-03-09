import React from 'react';
import Card from '../Card';

import { List, Item, Image, Title } from '../../styles/styledList';
import { DEFAULT_IMAGE } from '../../constants/constants';

const SeriesList = ({ list }) => {
  return (
    <Card id="series" title="Series">
      <List>
        {list.map(({ id, thumbnail, title }) => {
          const imgSrc =
            thumbnail !== null ? `${thumbnail.path}.${thumbnail.extension}` : DEFAULT_IMAGE;

          return (
            <Item key={id}>
              <Image src={imgSrc} />
              <Title>{title}</Title>
            </Item>
          );
        })}
      </List>
    </Card>
  );
};

export default SeriesList;
