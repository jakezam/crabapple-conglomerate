/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { Review } from '../../components/Review';
import { selectViewedUser } from '../../../store/ViewedUser/selectors';
import { actions as vUActions } from '../../../store/ViewedUser/slice';
import { ProfileBox } from './components/ProfileBox';

interface Props {}

export function ProfilePage(props: Props) {
  const dispatch = useDispatch();
  const viewedUser = useSelector(selectViewedUser);

  let reviews = viewedUser.reviews.map(review => <Review review={review} />);

  let ProviderContent = <div />;
  let recommendedProfiles = (
    <div>
      <RecommendedContainer></RecommendedContainer>
      <RecommendedContainer
        style={{ marginTop: '25px' }}
      ></RecommendedContainer>
    </div>
  );
  if (viewedUser.isProvider) {
    ProviderContent = (
      <div>
        <AboutContainer></AboutContainer>
        <PorfolioContainer></PorfolioContainer>
        <ReviewContainer>
          <ReviewBoxHeader>
            <p style={{ marginBottom: '10px' }}>
              1-{viewedUser.reviews.length} of {viewedUser.totalReviews} Reviews
            </p>
          </ReviewBoxHeader>
          {reviews}
        </ReviewContainer>
      </div>
    );
    recommendedProfiles = (
      <div>
        <RecommendedContainer></RecommendedContainer>
        <RecommendedContainer
          style={{ marginTop: '25px' }}
        ></RecommendedContainer>
        <RecommendedContainer
          style={{ marginTop: '25px' }}
        ></RecommendedContainer>
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <MainBody>
        <LeftBody>
          <ProfileInfoBox>
            <ProfileBox user={viewedUser} actions={vUActions} />
          </ProfileInfoBox>
          {ProviderContent}
          <RecentActivityContainer></RecentActivityContainer>
        </LeftBody>
        <RightBody>{recommendedProfiles}</RightBody>
      </MainBody>
      <Footer />
    </>
  );
}

const MainBody = styled.div`
  display: flex;
  padding: 130px 0;
  // background-color: #f4f4f4;
  justify-content: center;
`;

const LeftBody = styled.div``;

const ProfileInfoBox = styled.div`
  width: 730px;
  // height: 320px;
  text-align: center;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const AboutContainer = styled.div`
  width: 730px;
  padding: 2rem 0 2.5rem;
  min-height: 150px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const PorfolioContainer = styled.div`
  width: 730px;
  padding: 2rem 0 2.5rem;
  min-height: 150px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const RecentActivityContainer = styled.div`
  width: 730px;
  padding: 2rem 0 2.5rem;
  min-height: 150px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const ReviewContainer = styled.div`
  width: 730px;
  padding: 2rem;
  min-height: 150px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const ReviewBoxHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 11px;
  border-bottom: 1px solid grey;
`;

const RightBody = styled.div`
  margin-left: 100px;
`;

const RecommendedContainer = styled.div`
  width: 300px;
  height: 450px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

// const PreviousJobs = styled.div`
//   width: 300px;
//   height: 450px;
//   margin-top: 35px;
//   border: 1px solid rgba(34, 36, 38, 0.15);
//   color: rgba(0, 0, 0, 0.87);
//   border-radius: 0.28571429rem;
//   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
//   background-color: white;
// `;

// const FollowingContainer = styled.div`
//   width: 300px;
//   height: 450px;
//   margin-top: 35px;
//   border: 1px solid rgba(34, 36, 38, 0.15);
//   color: rgba(0, 0, 0, 0.87);
//   border-radius: 0.28571429rem;
//   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
//   background-color: white;
// `;
