/**
 * Homepage
 */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

// Component Imports //
import { NavigationBar } from '../../components/NavigationBar';
import { Footer } from '../../components/Footer';

export function HomePage() {
  return (
    <>
      <NavigationBar />
      <Base>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Homepage</title>
        </Helmet>
        {/*<ProfileView></ProfileView>*/}
        {/*<FeedView></FeedView>*/}
        {/*<JobsView></JobsView>*/}
      </Base>
      <Footer />
    </>
  );
}

const Base = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

// const ProfileView = styled.div``;
//
// const FeedView = styled.div``;
//
// const JobsView = styled.div``;
