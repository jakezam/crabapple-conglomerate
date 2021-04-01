/* eslint-disable react/prop-types */
/**
 *
 * Search Results Page
 *
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { selectDiscover } from '../../../store/Discover/selectors';
import { actions, sliceKey } from 'store/Discover/slice';
import { discoverPageSaga } from 'store/Discover/saga';
import { ISearchQuery } from 'store/Discover/types';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { ResultBlock } from './components/ResultBlock';
import { Segment } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import { useInjectSaga } from 'redux-injectors';

export function SearchResultsPage() {
  useInjectSaga({ key: sliceKey, saga: discoverPageSaga });
  // @ts-ignore
  let { category, keyword } = useParams();

  const dispatch = useDispatch();
  const discoverState = useSelector(selectDiscover);

  let urlQuery = keyword;
  let categorySearch = false;
  if (keyword == null) {
    urlQuery = category;
    categorySearch = true;
  }
  const queryPayload: ISearchQuery = {
    query: urlQuery,
    isCategory: categorySearch,
  };

  useEffect(() => {
    dispatch(actions.updateQuery(queryPayload));
  }, [dispatch, category, keyword]);

  if (discoverState.pageLoading) {
    return (
      <>
        <NavigationBar />
        <Segment basic loading style={{ margin: '300px 0' }} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <Body>
        <div>
          <ResultBlock key={0} results={discoverState.searchResults} />
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
  padding: 70px 0;
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
