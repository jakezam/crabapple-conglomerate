// Package Imports //
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-react';

// Component Imports //
import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Signup } from './containers/Signup/Loadable';
import { SignInPage } from './containers/SignInPage/Loadable';
import { Settings } from './containers/Settings/Loadable';
import { Discover } from './containers/Discover/Loadable';
import { SellerProfilePage } from './containers/SellerProfilePage/Loadable';
import { SplashPage } from './containers/SplashPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="inployd - %s" defaultTitle="inployd">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/profile-provider" component={SellerProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
