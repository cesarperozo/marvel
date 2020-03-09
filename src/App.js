import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyles';

import Layout from './components/Layout';
import Header from './components/Header';

import Home from './pages/Home';
import Detail from './pages/Details';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';

import { store } from './store/store';

import { LIGTH_THEME } from './constants/constants';

export const App = () => {
  const { state } = useContext(store);
  const theme = state.theme === LIGTH_THEME ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Detail} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};
