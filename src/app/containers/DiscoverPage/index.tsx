/* eslint-disable react/prop-types */
/**
 *
 * DiscoverPage
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { Comment, Grid, Image, Rating } from 'semantic-ui-react';
import { RecentlyViewed } from './components/RecentlyViewed';
import { CategoryContainer } from './components/CategoryContainer';

export function DiscoverPage() {
  return (
    <>
      <NavigationBar />
      <Body>
        <div>
          <RecentlyViewed />
          <CategoryContainer />
        </div>
        <div style={{ marginLeft: '100px' }}>
          <SuggestedContainer />
          <SuggestedContainer style={{ marginTop: '50px' }} />
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

const SuggestedContainer = styled.div`
  width: 300px;
  height: 450px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;
