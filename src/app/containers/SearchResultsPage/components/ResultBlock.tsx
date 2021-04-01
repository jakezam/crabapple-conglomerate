/**
 *
 * RecommendedAccount
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { SmallAccount } from '../../../../store/Discover/types';

import { selectResultFilter } from 'store/Discover/selectors';
import { actions, sliceKey } from 'store/Discover/slice';

import { UserCard } from './UserCard';
import { Button, Dropdown } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  key: number;
  results: Array<SmallAccount>;
}

export function ResultBlock(props: Props) {
  let users = props.results;

  const dispatch = useDispatch();
  const filterByRating = useSelector(selectResultFilter);

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

  let ratingIcon = '';
  let distanceIcon = 'check';
  if (filterByRating) {
    ratingIcon = 'check';
    distanceIcon = '';
  }

  return (
    <Body>
      <HeaderContainer>
        <div style={{ float: 'left', margin: '0 auto 0 100px' }}>
          <Dropdown
            text="Filter"
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="user" content="Filter Users By" />
              <Dropdown.Divider />
              <Dropdown.Item
                icon={ratingIcon}
                text="Rating"
                onClick={() => {
                  dispatch(actions.setFilterKey(true));
                }}
              />
              <Dropdown.Item
                icon={distanceIcon}
                text="Distance"
                onClick={() => {
                  dispatch(actions.setFilterKey(false));
                }}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h4 style={{ float: 'right', margin: '0 11% 0 0' }}>Right</h4>
      </HeaderContainer>
      <ResultsContainer>{results}</ResultsContainer>
      <div>{loadMoreBtn}</div>
    </Body>
  );
}

const Body = styled.div``;

const ResultsContainer = styled.div`
  margin-left: 2%;
  margin-right: 20px;
  padding-left: 4%;
  padding-right: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const HeaderContainer = styled.div`
  margin-left: 2%;
  margin-right: 20px;
  padding-left: 4%;
  padding-right: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Header = styled.div`
  width: 90%;
  margin: 90px auto;
  padding: 10px;
`;
