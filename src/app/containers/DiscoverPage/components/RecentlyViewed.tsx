import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Grid } from 'semantic-ui-react';
import { SuggestedAccount } from '../../../components/SuggestedAccount/Loadable';

export function RecentlyViewed() {
  return (
    <Body>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h4>Recently Viewed</h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <SuggestedAccount
              userId="1"
              username="Jacob Zamani"
              accountTag="Shelton, CT"
              rating={4}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <SuggestedAccount
              userId="7"
              username="Jacob Zamani"
              accountTag="Shelton, CT"
              rating={-1}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ margin: '10px 0' }}>
          <Grid.Column width={8}>
            <SuggestedAccount
              userId="1"
              username="Jacob Zamani"
              accountTag="Shelton, CT"
              rating={4}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <SuggestedAccount
              userId="7"
              username="Jacob Zamani"
              accountTag="Shelton, CT"
              rating={-1}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Body>
  );
}

const Body = styled.div`
  width: 630px;
  min-height: 180px;
  padding: 20px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;
