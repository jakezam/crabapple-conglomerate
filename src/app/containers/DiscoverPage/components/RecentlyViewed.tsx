import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Grid } from 'semantic-ui-react';
import { SuggestedAccount } from '../../../components/SuggestedAccount/Loadable';

export function RecentlyViewed() {
  return (
    // <Body>
    //   <Grid>
    //     <Grid.Row>
    //       <Grid.Column>
    //         <h4>Recently Viewed</h4>
    //       </Grid.Column>
    //     </Grid.Row>
    //     <Grid.Row>
    //       <Grid.Column width={8}>
    //         <SuggestedAccount
    //           userId="1"
    //           username="Jacob Zamani"
    //           accountTag="Shelton, CT"
    //           rating={4}
    //         />
    //       </Grid.Column>
    //       <Grid.Column width={8}>
    //         <SuggestedAccount
    //           userId="7"
    //           username="Jacob Zamani"
    //           accountTag="Shelton, CT"
    //           rating={-1}
    //         />
    //       </Grid.Column>
    //     </Grid.Row>
    //     <Grid.Row style={{ margin: '10px 0' }}>
    //       <Grid.Column width={8}>
    //         <SuggestedAccount
    //           userId="1"
    //           username="Jacob Zamani"
    //           accountTag="Shelton, CT"
    //           rating={4}
    //         />
    //       </Grid.Column>
    //       <Grid.Column width={8}>
    //         <SuggestedAccount
    //           userId="7"
    //           username="Jacob Zamani"
    //           accountTag="Shelton, CT"
    //           rating={-1}
    //         />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Body>
    <Body>
      <h4 style={{ padding: '20px 0px 0px 20px' }}>Recently Viewed</h4>
      <AccountContainer>
        <SuggestedAccount
          userId="1"
          username="Jacob Zamani"
          accountTag="Shelton, CT"
          rating={4}
        />
        <SuggestedAccount
          userId="7"
          username="Jacob Zamani"
          accountTag="Shelton, CT"
          rating={-1}
        />
        <SuggestedAccount
          userId="1"
          username="Jacob Zamani"
          accountTag="Shelton, CT"
          rating={4}
        />
        <SuggestedAccount
          userId="7"
          username="Jacob Zamani"
          accountTag="Shelton, CT"
          rating={-1}
        />
      </AccountContainer>
    </Body>
  );
}

const Body = styled.div`
  max-width: 630px;
  min-height: 180px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const AccountContainer = styled.div`
  max-width: 630px;
  min-height: 180px;

  margin-left: 2%;
  margin-right: 2%;
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
