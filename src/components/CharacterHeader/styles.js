import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Header = styled.div`
  background-color: ${props => props.theme.backgroundCard};
  position: relative;
  width: 100%;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 300px;
`;

export const Image = styled.img`
  ${fadeIn()}
  height: 300px;
  object-fit: cover;
  top: 0;
  width: 300px;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 300px;
  padding: 15px;
`;

export const Name = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  color: ${props => props.theme.title};
`;

export const Description = styled.p`
  text-align: justify;
  color: ${props => props.theme.text};
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const StatRow = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;

export const StatTitle = styled.a`
  font-size: 20px;
  color: ${props => props.theme.link};
  text-decoration: none;
`;
export const StatCount = styled.p`
  font-size: 28px;
  margin-top: 10px;
  font-weight: bold;
  color: ${props => props.theme.title};
`;
