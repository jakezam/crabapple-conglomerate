/**
 *
 * Category Card
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Card, Popup } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

interface IProps {
  key: number;
  category: string;
}

export function CategoryCard(props: IProps) {
  const dispatch = useDispatch();
  let category = props.category;
  let categoryNoSpaces = category.split(' ').join('').toLowerCase();
  // THESE WILL BE PASSED IN THROUGH PROPS EVENTUALLY
  let subComment = 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum...';
  let description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ullamcorper ante. Phasellus ut dui mollis, vulputate odio eget, malesuada dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce et ornare mi. Maecenas ac egestas elit. Fusce id consequat elit, lobortis sodales eros. Pellentesque facilisis orci quis enim bibendum, sit amet dictum eros sagittis.';

  let mainCard = (
    <Card
      link
      style={{ marginRight: '25px', marginBottom: '20px' }}
      header={category}
      description={subComment}
      onClick={(e, { name }) => {
        dispatch(push('/results/' + categoryNoSpaces));
      }}
    />
  );

  return (
    <Body>
      <Popup trigger={mainCard}>
        <Popup.Header>{category}</Popup.Header>
        <Popup.Content>{description}</Popup.Content>
      </Popup>
    </Body>
  );
}

const Body = styled.div``;
