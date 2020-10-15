import React from 'react';
import styled from 'styled-components/macro';
import { Button, Grid, Dropdown, Menu } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { JobRequestForm } from './JobRequestForm';

export function ProfileBox(props) {
  const { user, actions } = props;
  const dispatch = useDispatch();

  let buttonStyle = { marginTop: '20px', padding: '12px', width: '145px' };
  let followButton = <div />;
  if (!user.isSelf) {
    followButton = (
      <Button
        color={'red'}
        style={buttonStyle}
        onClick={() => {
          // dispatch(actions.changeFollowState());
        }}
      >
        Unfollow
      </Button>
    );
    if (!user.isFollowing) {
      followButton = (
        <Button
          color={'green'}
          style={buttonStyle}
          onClick={() => {
            // dispatch(actions.changeFollowState());
          }}
        >
          Follow
        </Button>
      );
    }
  }

  let displayName = user.firstName + ' ' + user.lastName;
  let rating = <div />;
  let requestButton = <div />;
  let categories = <div />;
  let location = <div />;
  let website = <div />;
  let provider = <div />;
  if (user.isProvider) {
    displayName = user.providerInfo.companyName;
    rating = (
      <h3 style={{ textAlign: 'left', paddingLeft: '5px', marginTop: '12px' }}>
        Reviews ({user.providerInfo.rating})
      </h3>
    );

    if (!user.isSelf) {
      requestButton = <JobRequestForm />;
    }

    let subcategories = user.providerInfo.subcategories.map(subcategory => (
      <Dropdown.Item style={{ width: '145px' }}>{subcategory}</Dropdown.Item>
    ));

    categories = (
      <Menu vertical style={{ width: '14rem' }}>
        <Dropdown item text={user.providerInfo.category}>
          <Dropdown.Menu>{subcategories}</Dropdown.Menu>
        </Dropdown>
      </Menu>
    );

    location = (
      <h4 style={{ paddingLeft: '5px', textAlign: 'left' }}>
        {user.providerInfo.location}
      </h4>
    );

    website = (
      <h4 style={{ textAlign: 'left', paddingLeft: '5px', paddingTop: '2px' }}>
        {user.providerInfo.websiteURL}
      </h4>
    );

    provider = (
      <>
        <Grid.Row style={{ paddingTop: '0' }}>
          <Grid.Column width={6}>{rating}</Grid.Column>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={5}>{categories}</Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Grid.Column width={11}>{website}</Grid.Column>
          <Grid.Column width={5}>{location}</Grid.Column>
        </Grid.Row>
      </>
    );
  }

  let followerCount = user.followerCount + ' \tfollowers';
  let followingCount = user.numFollowing + ' \tfollowing';

  return (
    <div>
      <Grid style={{ padding: '15px' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <ImageContainer>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                alt="none"
                style={{ width: '100%' }}
              />
            </ImageContainer>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1
              style={{
                textAlign: 'left',
                paddingTop: '20px',
                marginBottom: '10px',
              }}
            >
              {displayName}
            </h1>
            <HorizontalAlign>
              <h4 style={{ textAlign: 'left', marginTop: '0' }}>
                {followerCount}
              </h4>
              <h4
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  marginLeft: '50px',
                }}
              >
                {followingCount}
              </h4>
            </HorizontalAlign>
          </Grid.Column>
          <Grid.Column width={4}>
            {followButton}
            {requestButton}
          </Grid.Column>
        </Grid.Row>
        {provider}
      </Grid>
    </div>
  );
}

const ImageContainer = styled.div`
  border: 6px solid white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.075),
    0 6px 10px 0 rgba(0, 0, 0, 0.075);
`;

const HorizontalAlign = styled.div`
  display: flex;
`;
