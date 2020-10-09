/**
 * Homepage
 */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

// Component Imports //
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function HomePage() {
  return (
    <>
      <Header />
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
