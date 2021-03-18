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
import { actions as vUActions } from '../../../store/Jobs/slice';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { UserCard } from './components/UserCard';
import { Comment, Grid, Rating, Table } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';

export function SearchResultsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { category, keyword } = useParams();

  const dispatch = useDispatch();
  const discoverState = useSelector(selectDiscover);

  return (
    <>
      <NavigationBar />
      <Body>
        <UserCard />
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  display: flex;
  padding: 75px 0;
  justify-content: center;
  font-family: 'Nunito';
`;

const CardContainer = styled.div`
  width: 250px;
  min-height: 250px;
  margin-top: 50px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  border: 1px solid white;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
`;
