import React from 'react';
import css from '../HomePage.scss';
import { Button, Grid } from 'semantic-ui-react';
import { ProfilePlaceholder } from './ProfilePlaceholder';

export function DiscoverBlock() {
  return (
    <div className="discoverContainer">
      <h1>Discover people in your area</h1>
      <h2>Providers</h2>
      <Grid columns={3} stackable>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
      </Grid>
      <h2>Friends</h2>
      <Grid columns={3} stackable>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
        <Grid.Column>
          <ProfilePlaceholder />
        </Grid.Column>
      </Grid>
      <div className="discoverCategoryFooter">
        <h3>Log in to see more</h3>
        <Button basic color="green">
          Get Started
        </Button>
      </div>
    </div>
  );
}
