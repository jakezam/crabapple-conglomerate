/**
 *
 * RecommendedAccount
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { SmallAccount } from '../../../../store/Discover/types';

import { UserCard } from './UserCard';
import { Button } from 'semantic-ui-react';

interface Props {
  key: number;
  results: Array<SmallAccount>;
}

export function ResultBlock(props: Props) {
  let users = props.results;

  let numResults = users.length;
  let numUsers = Math.min(6, numResults);
  const [numCards, setNumCards] = useState(numUsers);

  let usersToDisplay = users.slice(0, numCards);
  let results = usersToDisplay.map(user => <UserCard key={0} user={user} />);

  let loadMoreBtn = <></>;
  let buttonStyle = { margin: '40px 41%', padding: '12px', width: '165px' };
  if (numCards < numResults) {
    console.log('Load more');
    loadMoreBtn = (
      <>
        <Button
          primary
          style={buttonStyle}
          onClick={() => {
            setNumCards(Math.min(numCards + 3, numResults));
          }}
        >
          Load More
        </Button>
      </>
    );
  }

  return (
    <Body>
      <ResultsContainer>{results}</ResultsContainer>
      <div>{loadMoreBtn}</div>
    </Body>
  );
}

const Body = styled.div``;

const ResultsContainer = styled.div`
  margin-left: 30px;
  margin-right: 20px;
  padding-left: 59px;
  padding-right: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
