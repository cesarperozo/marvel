import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${props => props.theme.backgroundHeader};
  height: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 100%;
`;

export const Divider = styled.div`
  height: 50px;
  border-right: 1px solid ${props => props.theme.divider};
  flex: 0 0 1px;
`;

export const Left = styled.div`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Center = styled.div`
  flex: 1 1 auto;
  padding: 8px 10px;
`;

export const Right = styled.div`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
