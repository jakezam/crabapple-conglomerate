/* App router, here we create all the routes
that we can navigate to */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-react';
import { JobsPage } from './containers/JobsPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { ProfilePage } from './containers/ProfilePage/Loadable';
import { SignUpPage } from './containers/SignUpPage/Loadable';
import { SearchResultPage } from './containers/SearchResultsPage/Loadable';
import { SettingsPage } from './containers/SettingsPage/Loadable';
import { DiscoverPage } from './containers/DiscoverPage/Loadable';
import { SplashPage } from './containers/SplashPage/Loadable';
import { NotificationsPage } from './containers/NotificationsPage/Loadable';
import '../styles/gobal.css';

export function App() {
  return (
    <>
      <Helmet titleTemplate="inployd - %s" defaultTitle="inployd">
        <meta
          name="description"
          content="Connecting service providers to those who need work done"
        />
      </Helmet>

      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
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
        <Route exact path="/consultations">
          <JobsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
