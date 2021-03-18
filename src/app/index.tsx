// Package Imports //
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-react';

// Component Imports //
import { HomePage } from './containers/HomePage/Loadable';
import { JobsPage } from './containers/JobsPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { ProfilePage } from './containers/ProfilePage/Loadable';
import { SignUpPage } from './containers/SignUpPage/Loadable';
import { SignInPage } from './containers/SignInPage/Loadable';
import { SearchResultPage } from './containers/SearchResultsPage/Loadable';
import { SettingsPage } from './containers/SettingsPage/Loadable';
import { DiscoverPage } from './containers/DiscoverPage/Loadable';
import { SplashPage } from './containers/SplashPage/Loadable';
import { NotificationsPage } from './containers/NotificationsPage/Loadable';

export function App() {
  return (
    <>
      <Helmet titleTemplate="inployd - %s" defaultTitle="inployd">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        {/* <Route exact path="/home">
          <HomePage />
        </Route> */}
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/discover">
          <DiscoverPage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/notifications">
          <NotificationsPage />
        </Route>
        <Route path="/profile/:id" component={ProfilePage} />
        <Route
          path="/results/:category?/:keyword?"
          component={SearchResultPage}
        />
        <Route exact path="/jobs">
          <JobsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
