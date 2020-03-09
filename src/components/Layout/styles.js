import styled from 'styled-components';

export const StyledLayout = styled.div`
  margin: 30px 120px;
  height: calc(100vh - 123px);

  @media (max-width: 1368px) {
    margin: 30px 60px;
  }

  @media (max-width: 1024px) {
    margin: 30px 20px;
  }
  @media (max-width: 640px) {
    margin: 30px 20px;
  }
`;
