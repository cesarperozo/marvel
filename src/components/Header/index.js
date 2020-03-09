import React from 'react';
import { StyledHeader, Left, Right, Center, SearchInput, Divider } from './styles';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import ThemeSelector from '../ThemeSelector';

const Header = () => {
  return (
    <StyledHeader>
      <Left>
        <Logo />
      </Left>
      <Divider />
      <Center>
        <SearchForm />
      </Center>
      <Divider />
      <Right>
        <ThemeSelector />
      </Right>
    </StyledHeader>
  );
};

export default Header;
