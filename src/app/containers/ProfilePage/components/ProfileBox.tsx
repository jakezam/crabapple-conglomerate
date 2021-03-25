/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import {
  Button,
  Grid,
  Dropdown,
  Menu,
  Rating,
  Segment,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { JobRequestForm } from './JobRequestForm';

export function ProfileBox(props) {
  const { user, actions, reviewCount } = props;
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
  let provider = <div />;
  if (user.isProvider) {
    displayName = user.providerInfo.companyName;
    rating = (
      <HorizontalAlign>
        <Rating
          rating={user.providerInfo.rating}
          maxRating={5}
          disabled
          size="huge"
          style={{ marginTop: '1px', marginRight: '4px' }}
        />
        {/* <ReviewHeader>Reviews ({user.reviews.length})</ReviewHeader> */}
        <ReviewHeader>Reviews ({reviewCount})</ReviewHeader>
      </HorizontalAlign>
    );

    if (!user.isSelf) {
      requestButton = <JobRequestForm />;
    }

    provider = (
      <>
        <Grid.Row style={{ paddingTop: '0' }}>
          <Grid.Column>
            <Segment floated="left" style={{ width: '25%' }}>
              <h4 style={{ margin: '0 0' }}>{user.providerInfo.category}</h4>
            </Segment>
            <Segment floated="right" style={{ marginTop: '0', width: '25%' }}>
              <h4 style={{ margin: '0 0' }}>{user.providerInfo.location}</h4>
            </Segment>
          </Grid.Column>
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
              <h4
                style={{ textAlign: 'left', marginTop: '0', marginLeft: '4px' }}
              >
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
            {rating}
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

const ReviewHeader = styled.h4`
  text-align: left;
  padding-left: 5px;
  margin-top: 3px;
`;