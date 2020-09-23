/**
 *
 * SuggestedUser
 *
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import './SuggestedUser.scss';

interface Props {
  fullName: string;
  username: string;
}

export function SuggestedUser(props: Props) {
  const { fullName, username } = props;

  return (
    <Grid className="suggestedUser">
      <Grid.Row className="rowNoBottomPadding">
        <Grid.Column width={5}>
          <img
            className="suggestedProfileImage"
            src="logo512.png"
            alt="none"
          ></img>
        </Grid.Column>
        <Grid.Column className="columnNoLeftPadding" width={11}>
          <h5 className="suggestedUser-fullName">{fullName}</h5>
          <h5 className="suggestedUser-username">{username}</h5>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
