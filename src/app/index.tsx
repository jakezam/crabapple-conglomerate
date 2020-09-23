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

// import { NotFoundPage } from './components/NotFoundPage/Loadable';
import 'semantic-ui-react';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { SellerProfilePage } from './containers/SellerProfilePage/Loadable';

import { Signup } from './containers/Signup/Loadable';
import { SignInPage } from './containers/SignInPage/Loadable';
import { Header } from './components/Header';
import { Footer } from './containers/Footer/Loadable';
import { Settings } from './containers/Settings/Loadable';
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}
