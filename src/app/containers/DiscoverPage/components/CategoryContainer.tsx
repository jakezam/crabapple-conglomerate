/**
 *
 * Category Container
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Card, Popup } from 'semantic-ui-react';
import { CategoryCard } from './CategoryCard';
import { selectCategories } from 'store/Discover/selectors';
import { useSelector } from 'react-redux';

export function CategoryContainer() {
  const categories = useSelector(selectCategories);

  // THIS IS NOT THE FINAL SOLUTION, TO BE CHANGED LATER TO BE MADE DYNAMIC
  let cards = categories.map(category => (
    <CategoryCard
      key={0}
      category={category.category}
      description={category.description}
    />
  ));

  return (
    <Body>
      <h3 style={{ padding: '20px 0px 20px 20px' }}>
        Find a Service Provider in your Area:
      </h3>
      <AccountContainer>{cards}</AccountContainer>
    </Body>
  );
}

const Body = styled.div`
  max-width: 1080px;
  min-width: 230px;
  min-height: 600px;
  margin-top: 50px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const AccountContainer = styled.div`
  min-height: 600px;

  margin-left: 2%;
  margin-right: 2%;
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
