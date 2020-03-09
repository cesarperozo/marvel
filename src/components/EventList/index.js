import React from 'react';
import Card from '../Card';

import { List, Item, Image, Title } from '../../styles/styledList';
import { DEFAULT_IMAGE } from '../../constants/constants';

const EventList = ({ list }) => {
  return (
    <Card id="events" title="Events">
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

export default EventList;
