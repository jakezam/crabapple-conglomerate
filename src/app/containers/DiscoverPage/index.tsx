/* eslint-disable react/prop-types */
/**
 *
 * DiscoverPage
 *
 */

import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/redux-injectors';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { RecentlyViewed } from './components/RecentlyViewed';
import { CategoryContainer } from './components/CategoryContainer';
import { Segment } from 'semantic-ui-react';

import { discoverPageSaga } from 'store/Discover/saga';
import { selectDiscover } from 'store/Discover/selectors';
import { actions, sliceKey } from 'store/Discover/slice';

export function DiscoverPage() {
  useInjectSaga({ key: sliceKey, saga: discoverPageSaga });

  const dispatch = useDispatch();
  const discoverState = useSelector(selectDiscover);

  useEffect(() => {
    dispatch(actions.initiateDiscoverSaga([]));
  }, [dispatch]);

  if (discoverState.discoverPageLoading) {
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
          {/* Recently viewed profiles is a very difficuly thing to implement
              and is not essential for an MVP */}
          {/* <RecentlyViewed users={discoverState.recentlyViewed} /> */}
          <CategoryContainer />
        </div>
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  display: flex;
  padding: 75px 0;
  justify-content: center;
`;
