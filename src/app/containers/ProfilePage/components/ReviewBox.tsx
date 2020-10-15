import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Review } from '../../../components/Review';
import { Dropdown, Grid, Pagination } from 'semantic-ui-react';
import { ReviewForm } from './ReviewForm';

export function ReviewBox(props) {
  const [active, setActive] = useState(1);
  const [reviewIndex, setIndex] = useState(0);
  const { reviews } = props;

  let endIndex = reviewIndex + 2;
  if (endIndex > reviews.length) {
    endIndex = reviews.length;
  }
  let reviewArr = reviews.slice(reviewIndex, endIndex);
  let reviewBlock = reviewArr.map(review => <Review review={review} />);

  let totalPages;
  if (reviews.length % 2 == 0) {
    totalPages = reviews.length / 2;
  } else {
    totalPages = reviews.length / 2;
  }

  let filter = (
    <Dropdown icon="filter" floated="right" button className="icon mini">
      <Dropdown.Menu>
        <Dropdown.Header content="Filter by:" />
        <Dropdown.Divider />
        <Dropdown.Item>Rating</Dropdown.Item>
        <Dropdown.Item>Date</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <Body>
      <Grid style={{ borderBottom: '1px solid grey', margin: '0 -2px' }}>
        <Grid.Column width={12} style={{ padding: '0 1rem' }}>
          <ReviewBoxHeader>
            <p style={{ marginTop: '9px' }}>
              {reviewIndex + 1}-{endIndex} of {reviews.length} Reviews
            </p>
          </ReviewBoxHeader>
        </Grid.Column>
        <Grid.Column
          floated="left"
          width={4}
          style={{ padding: '4px 1rem', display: 'flex' }}
        >
          <ReviewForm />
          {filter}
        </Grid.Column>
      </Grid>
      {reviewBlock}
      <div style={{ paddingTop: '20px' }}>
        <Pagination
          activePage={active}
          onPageChange={(e, { activePage }) => {
            let x = Number(activePage);
            setActive(x);
            setIndex(x * 2 - 2);
          }}
          totalPages={totalPages}
          style={{ margin: 'auto' }}
        />
      </div>
    </Body>
  );
}

const Body = styled.div``;

const ReviewBoxHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 11px;
  // border-bottom: 1px solid grey;
`;
