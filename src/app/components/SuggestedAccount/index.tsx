/**
 *
 * SuggestedAccount
 *
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import './SuggestedAccount.scss';

interface Props {
  username: string;
  reviewCount: number;
  rating: number;
}

export function SuggestedAccount(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const { username, reviewCount, rating } = props;

  return (
    <Grid className="suggestedAccount">
      <Grid.Row className="rowNoBottomPadding">
        <Grid.Column width={5}>
          <img
            className="suggestedProfileImage"
            src="logo512.png"
            alt="none"
          ></img>
        </Grid.Column>
        <Grid.Column className="columnNoLeftPadding" width={11}>
          <h5>{username}</h5>
          <h5>
            ({reviewCount}) {rating}
          </h5>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
