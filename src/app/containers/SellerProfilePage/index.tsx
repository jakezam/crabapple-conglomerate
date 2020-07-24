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
import { ProfileInfoBox } from './components/ProfileInfoBox';

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
      <div className="profileContainer">
        <div className="leftHalf">
          <div className="profileInfo">
            <ProfileInfoBox />
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
    </>
  );
}
