import styled from 'styled-components';
import { fadeIn } from './animations';

export const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Item = styled.div`
  padding: 10px;

  width: 20%;
  text-align: center;
  transition: background-color 0.2s linear 0.2s;
  @media (max-width: 1024px) {
    width: 33%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 640px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }


  &:hover {
    background-color: #d9d9d9;
  }
`;

export const Image = styled.img`
  ${fadeIn()};
  
  height: 100px;
  object-fit: cover;
  flex: 0 0 70px;

`;

export const Title = styled.p`
  flex: 1 1 auto;
  color: ${props => props.theme.text};
`;
