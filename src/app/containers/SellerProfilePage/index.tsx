/**
 *
 * SellerProfilePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './utils/slice';
import { selectSellerProfilePage } from './utils/selectors';
import { sellerProfilePageSaga } from './utils/saga';
import './SellerProfilePage.scss';
import { Button, Grid } from 'semantic-ui-react';

interface Props {}

export function SellerProfilePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: sellerProfilePageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sellerProfilePage = useSelector(selectSellerProfilePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>SellerProfilePage</title>
        <meta name="description" content="Description of SellerProfilePage" />
      </Helmet>
      <div className="header">Header</div>
      <div className="profileContainer">
        <div className="leftHalf">
          <div className="profileInfo">
            <Grid className="profileGrid">
              <Grid.Row>
                <Grid.Column width={4}>
                  <div className="profileImageContainer">
                    <img src="logo512.png" alt="none"></img>
                  </div>
                </Grid.Column>
                <Grid.Column width={8} className="nameAndReviews">
                  <h1>Alejandro's Landscaping Co.</h1>
                  <p>Reviews (0)</p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Button className="followBtn">Follow</Button>
                  <Button className="sendRequestBtn">Send Job Request</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="porfolioContainer">Portfolio</div>
          <div className="recentPostContainer">Recent Posts</div>
          <div className="reviewContainer">Reviews</div>
          <div className="aboutContainer">About</div>
        </div>
        <div className="rightHalf">
          <div className="otherCategoryProfiles">Others</div>
          <div className="previousJobs">Previous Jobs</div>
          <div className="followingContainer">Following</div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}
