/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-react';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { Signup } from './containers/Signup/Loadable';
import { Header } from './components/Header';
import { Footer } from './containers/Footer/Loadable';
import { Discover } from './containers/Discover/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Header />
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route component={NotFoundPage} />
        <Route path="/signup" component={Signup} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </BrowserRouter>
  );
}
