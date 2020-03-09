import React from 'react';
import {
  Header,
  ImageWrapper,
  Image,
  ContentWrapper,
  Name,
  Description,
  StatsWrapper,
  StatRow,
  StatTitle,
  StatCount,
} from './styles';

const CharacterHeader = ({ thumbnail, name, description, comics, series, stories, events }) => {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension} `;

  return (
    <Header>
      <ImageWrapper>
        <Image src={imgSrc} />
      </ImageWrapper>
      <ContentWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>

        <StatsWrapper>
          <StatRow>
            <StatTitle href="#comics">Comics</StatTitle>
            <StatCount>{comics.available}</StatCount>
          </StatRow>
          <StatRow>
            <StatTitle href="#series">Series</StatTitle>
            <StatCount>{series.available}</StatCount>
          </StatRow>
          <StatRow>
            <StatTitle href="#stories">Stories</StatTitle>
            <StatCount>{stories.available}</StatCount>
          </StatRow>
          <StatRow>
            <StatTitle href="#events">Events</StatTitle>
            <StatCount>{events.available}</StatCount>
          </StatRow>
        </StatsWrapper>
      </ContentWrapper>
    </Header>
  );
};

export default CharacterHeader;
