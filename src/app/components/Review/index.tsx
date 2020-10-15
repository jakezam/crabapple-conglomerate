/**
 *
 * Review
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Grid, Icon, Label, Rating } from 'semantic-ui-react';

export function Review(props) {
  const {
    username,
    rating,
    title,
    message,
    date,
    wouldRecommend,
    numLikes,
    numDislikes,
  } = props.review;

  let likeReview = (
    <div style={{ display: 'flex', padding: '0' }}>
      <Button as="div" labelPosition="right" size="mini">
        <Button size="mini">
          <Icon name="thumbs up" />
        </Button>
        <Label as="a" basic pointing="left">
          {numLikes}
        </Label>
      </Button>
      <Button as="div" labelPosition="right" size="mini">
        <Button size="mini">
          <Icon name="thumbs down" />
        </Button>
        <Label as="a" basic pointing="left">
          {numDislikes}
        </Label>
      </Button>
    </div>
  );

  let recommendation = (
    <div style={{ display: 'flex', padding: '0' }}>
      <Icon name="times circle" />
      <RecommendText>No, I would not recommend this account</RecommendText>
    </div>
  );
  if (wouldRecommend) {
    recommendation = (
      <div style={{ display: 'flex', padding: '0' }}>
        <Icon name="check circle" />
        <RecommendText>Yes, I would recommend this account</RecommendText>
      </div>
    );
  }

  return (
    <Body>
      <Grid style={{ padding: '0px 15px' }}>
        <Grid.Row>
          <Grid.Column width={8} style={{ display: 'flex', padding: '0' }}>
            <Rating
              defaultRating={rating}
              maxRating={5}
              disabled
              size="tiny"
              style={{ marginTop: '0.15rem', marginRight: '4px' }}
            />
            <HeaderText>{rating} out of 5</HeaderText>
            <HeaderText>{username}</HeaderText>
            <DateText>- {date}</DateText>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: '0' }}>
          <TitleText>{title}</TitleText>
        </Grid.Row>
        <Grid.Row>
          <ResponseBox>{message}</ResponseBox>
        </Grid.Row>
        <Grid.Row>{recommendation}</Grid.Row>
        <Grid.Row>{likeReview}</Grid.Row>
      </Grid>
    </Body>
  );
}

const Body = styled.div`
  padding: 15px 0;
  // border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

const HeaderText = styled.p`
  font-size: 12px;
  font-weight: bolder;
  margin-right: 12px;
  margin-bottom: 0;
`;

const RecommendText = styled.p`
  font-size: 11px;
  font-weight: bolder;
  margin-top: 1px;
  margin-bottom: 0;
`;

const DateText = styled.p`
  font-size: 10px;
  margin-top: 1px;
`;

const TitleText = styled.h4`
  margin: 9px 0;
`;

const ResponseBox = styled.p`
  font-size: 11px;
`;
