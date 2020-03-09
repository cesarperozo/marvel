import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-top: 10px;
  background-color: ${props => props.theme.backgroundCard};
  width: 100%;
  transition: all 0.25s ease-in-out;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  color: ${props => props.theme.subtitle};
`;
