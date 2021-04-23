/**
 *
 * Category Card
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { Card, Popup } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { actions } from 'store/Discover/slice';

interface IProps {
  key: number;
  category: string;
  description: string;
}

export function CategoryCard(props: IProps) {
  const dispatch = useDispatch();

  let category = props.category;
  let categoryNoSpaces = category.split(' ').join('').toLowerCase();

  let subComment = 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum...';
  let description = props.description;

  let mainCard = (
    <Card
      link
      style={{ marginRight: '25px', marginBottom: '20px' }}
      header={category}
      description={subComment}
      onClick={() => {
        dispatch(actions.updateCategoryQuery(category));
        dispatch(push('/results/' + categoryNoSpaces));
      }}
    />
  );

  return (
    <Body>
      <Popup trigger={mainCard} position="bottom left">
        <Popup.Header>{category}</Popup.Header>
        <Popup.Content>{description}</Popup.Content>
      </Popup>
    </Body>
  );
}

const Body = styled.div``;
