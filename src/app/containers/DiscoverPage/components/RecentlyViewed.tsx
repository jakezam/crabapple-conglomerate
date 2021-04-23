import React from 'react';
import { SmallAccount } from 'store/Discover/types';
import styled from 'styled-components/macro';
import { SuggestedAccount } from '../../../components/SuggestedAccount/Loadable';

interface IProps {
  users: Array<SmallAccount>;
}

function determineTag(user: SmallAccount) {
  if (user.isProvider) {
    return user.providerData.category;
  }
  return user.userTag;
}

function determineRating(user: SmallAccount) {
  if (user.isProvider) {
    return user.providerData.rating;
  }
  return -1;
}

export function RecentlyViewed(props: IProps) {
  let users = props.users;

  let userCards = users.map(user => <SuggestedAccount account={user} />);

  return (
    <Body>
      <h3 style={{ padding: '20px 0px 20px 20px' }}>Recently Viewed</h3>
      <AccountContainer>{userCards}</AccountContainer>
    </Body>
  );
}

const Body = styled.div`
  max-width: 1080px;
  min-width: 230px;
  min-height: 180px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const AccountContainer = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 10px;
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
