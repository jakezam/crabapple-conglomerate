/* eslint-disable react/prop-types */
/**
 *
 * Search Results Page
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { selectDiscover } from '../../../store/Discover/selectors';
import { sliceKey } from 'store/Discover/slice';
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

  // useEffect(() => {
  //   dispatch(actions.updateQuery(queryPayload));
  // }, [dispatch, category, keyword]);

  if (discoverState.resultsPageLoading) {
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
