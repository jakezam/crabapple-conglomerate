/* eslint-disable react/prop-types */
/**
 *
 * Search Results Page
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { selectDiscover } from '../../../store/Discover/selectors';
import { actions as vUActions } from '../../../store/Jobs/slice';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { UserCard } from './components/UserCard';
import { Button } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';

export function SearchResultsPage() {
  // @ts-ignore
  let { category, keyword } = useParams();

  const dispatch = useDispatch();
  const discoverState = useSelector(selectDiscover);

  let numResults = discoverState.searchResults.length;
  let numUsers = Math.min(6, numResults);
  const [numCards, setNumCards] = useState(numUsers);

  let usersToDisplay = discoverState.searchResults.slice(0, numCards);
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
    <>
      <NavigationBar />
      <Body>
        <div>
          <FilterContainer>Filter</FilterContainer>
        </div>
        <div>
          <ResultsContainer>{results}</ResultsContainer>
          <div>{loadMoreBtn}</div>
        </div>
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  display: flex;
  font-family: 'Nunito';
  justify-content: center;
  margin-bottom: 50px;
  padding: 30px 0;
`;

const FilterContainer = styled.div`
  width: 200px;
  height: 250px;
  margin-top: 49px;
  margin-left: 100px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const ResultsContainer = styled.div`
  margin-left: 30px;
  margin-right: 20px;
  padding-left: 59px;
  padding-right: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
