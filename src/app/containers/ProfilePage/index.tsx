/* eslint-disable react/prop-types */
/**
 *
 * ProfilePage
 *
 */

import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { RecommendedAccount } from '../../components/RecommendedAccount';

import { selectViewedUser } from '../../../store/ViewedUser/selectors';
import { actions, sliceKey } from '../../../store/ViewedUser/slice';
import { useInjectSaga } from '../../../utils/redux-injectors';
import { profilePageSaga } from 'store/ViewedUser/saga';
import {
  actions as reviewActions,
  sliceKey as reviewSliceKey,
} from '../../../store/Review/slice';
import { reviewSaga } from 'store/Review/saga';
import { selectReview } from '../../../store/Review/selectors';

import { ProfileBox } from './components/ProfileBox';
import { ReviewBox } from './components/ReviewBox';
import { Message, Segment } from 'semantic-ui-react';
import { JobRequestForm } from './components/JobRequestForm';

export function ProfilePage(props) {
  useInjectSaga({ key: sliceKey, saga: profilePageSaga });
  useInjectSaga({ key: reviewSliceKey, saga: reviewSaga });

  const dispatch = useDispatch();
  const viewedUser = useSelector(selectViewedUser);
  const reviewState = useSelector(selectReview);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(actions.changeId(id));
    dispatch(reviewActions.setReceivingUserId(id));
  }, [dispatch, id]);

  if (viewedUser.isLoading) {
    return (
      <>
        <NavigationBar />
        <Segment basic loading style={{ margin: '300px 0' }} />
        <Footer />
      </>
    );
  }

  if (viewedUser.notFound) {
    return (
      <>
        <NavigationBar />
        <div style={{ margin: '150px 300px 350px 300px' }}>
          <Message>
            <Message.Header>User not found</Message.Header>
            <p>The user you are searching for does not exist</p>
          </Message>
        </div>
        <Footer />
      </>
    );
  }

  let nearbyProviders = viewedUser.providersInArea.map(account => (
    <RecommendedAccount key={0} account={account} />
  ));

  let ProviderContent = <div />;
  let recommendedProfiles = (
    <div>
      <RecommendedContainer>
        <h4>Services in Your Area</h4>
        {nearbyProviders}
      </RecommendedContainer>
    </div>
  );
  if (viewedUser.isProvider) {
    let otherProviders = viewedUser.providerInfo.otherCategoryAccounts.map(
      account => <RecommendedAccount key={0} account={account} />,
    );

    ProviderContent = (
      <div>
        <AboutContainer></AboutContainer>
        <ReviewContainer>
          <ReviewBox reviews={reviewState.currReviews} />
        </ReviewContainer>
        <PorfolioContainer></PorfolioContainer>
      </div>
    );
    recommendedProfiles = (
      <div>
        <RecommendedContainer>
          <h4>Other {viewedUser.providerInfo.category} in Area</h4>
          {otherProviders}
        </RecommendedContainer>
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <MainBody>
        <LeftBody>
          <ProfileInfoBox>
            <ProfileBox
              user={viewedUser}
              actions={actions}
              reviewCount={reviewState.currReviews.length}
            />
          </ProfileInfoBox>
          {ProviderContent}
        </LeftBody>
        <RightBody>{recommendedProfiles}</RightBody>
      </MainBody>
      <Footer />
    </>
  );
}

const MainBody = styled.div`
  display: flex;
  padding: 80px 0 130px 0;
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
  // min-height: 700px;
  margin-top: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const RightBody = styled.div`
  margin-left: 100px;
`;

const RecommendedContainer = styled.div`
  width: 300px;
  min-height: 450px;
  padding: 15px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;
