import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchIcon = styled(FaSearch)`
  min-width: 40px;
  text-align: center;
  fill: ${props => props.theme.text};

  height: 26px;
  padding-top: 8px;

  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 6px;
  border: none;
  font-size: 14px;
  width: 100%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.backgroundHeader};

  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
