/**
 *
 * Review
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Comment, Grid, Icon, Label, Rating } from 'semantic-ui-react';

interface Props {
  review: {
    username: string;
    rating: number;
    title: string;
    message: string;
    date: string;
    wouldRecommend: boolean;
    numLikes: number;
    numDislikes: number;
  };
}

export function Review(props: Props) {
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
      <Grid style={{ padding: '0 15px 15px 15px' }}>
        <Grid.Row>
          <Grid.Column width={16} style={{ padding: '0' }}>
            <Comment.Group minimal size="mini">
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">{username}</Comment.Author>
                  <Comment.Metadata>
                    <span>{date}</span>
                  </Comment.Metadata>
                  <Comment.Text style={{ display: 'flex' }}>
                    <Rating
                      rating={rating}
                      maxRating={5}
                      disabled
                      size="tiny"
                      style={{ marginTop: '0.10rem', marginRight: '4px' }}
                    />
                    {rating} out of 5
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: '0' }}>
          <TitleText>{title}</TitleText>
        </Grid.Row>
        <Grid.Row>
          <ResponseBox>{message}</ResponseBox>
        </Grid.Row>
        <Grid.Row>{recommendation}</Grid.Row>
        {/* <Grid.Row>{likeReview}</Grid.Row> */}
      </Grid>
    </Body>
  );
}

const Body = styled.div`
  padding: 15px 0;
  // border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

const RecommendText = styled.p`
  font-size: 11px;
  font-weight: bolder;
  margin-top: 1px;
  margin-bottom: 0;
`;

const TitleText = styled.h4`
  margin: 9px 0;
`;

const ResponseBox = styled.p`
  font-size: 11px;
`;
