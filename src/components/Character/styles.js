import styled from 'styled-components';

export const CardWrapper = styled.div`
  min-height: 350px;
  width: 25%;
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
`;

export const Card = styled.div`
  background-color: ${props => props.theme.backgroundCard};
  border-radius: 4px;
  position: relative;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin: 10px;
`;

export const Image = styled.img`
  height: 300px;
  object-fit: cover;
  top: 0;
  width: 100%;
`;

export const Name = styled.p`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.title};
`;
