import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectViewedUser, selectViewedUserId } from './selectors';
import { env } from '../environment';
import { ViewedUserState, ProviderAddition } from './types';
import { GetUsersResponse, GetProvidersResponse } from '../../services/api';

function* getProfile() {
  yield put(actions.setPageLoading(true));
  let userData: ViewedUserState;
  let providerData: ProviderAddition = {
    companyName: '',
    websiteURL: '',
    category: '',
    subcategories: [],
    rating: 0,
    location: '',
    otherCategoryAccounts: [],
    previousJobs: [],
  };
  let isProvider = false;

  const id = yield select(selectViewedUserId);
  console.log('Profile Page Saga: Fetching User State for user', id);
  console.log('Profile Page Saga: GET USER');
  const userResponse: GetUsersResponse = yield env.api.GetUserById(id);
  console.log('Reponse user: RESPONSE => ', userResponse);

  // Now set the state of the Profile

  console.log('Profile Page Saga: GET PROVIDER DATA');
  const providerResp: GetProvidersResponse = yield env.api.GetProvidersById(id);
  console.log('Profile Page Saga: RESPONSE => ', providerResp);

  if (providerResp.kind !== 'ok') {
    console.log('User is not a provider');
  } else {
    isProvider = true;
    providerData = {
      companyName: providerResp.response ? providerResp.response.company : '',
      websiteURL: providerResp.response ? providerResp.response.website : '',
      category: providerResp.response ? providerResp.response.category : '',
      subcategories: [],
      rating: providerResp.response ? providerResp.response.rating : 0,
      location: userResponse.response ? userResponse.response.state : '',
      otherCategoryAccounts: [],
      previousJobs: [],
    };
  }

  // console.log('Profile Page Saga: GET ACCOUNT RECOMMENDATIONS');
  // Get providers in area
  // Get users in area

  // console.log('Profile Page Saga: GET FOLLOWER DATA');
  // Get the number of users following them
  // Get the number of users they follow
  // If this isn't your profile check if you follow them

  // console.log('Profile Page Saga: GET ADDITIONAL PROVIDER DATA');
  // If Provider, get all reviews
  // If Provider, get account description
  // If Provider, get others accounts in their category
  // If Provider, get the accounts they worked for with their most recent jobs

  userData = {
    userId: userResponse.response ? userResponse.response.userId.valueOf() : 0,
    isLoading: false,
    firstName: userResponse.response ? userResponse.response.firstName : '',
    lastName: userResponse.response ? userResponse.response.lastName : '',
    isProvider: isProvider,
    isSelf: false,
    numFollowing: 0,
    followerCount: 0,
    isFollowing: false,
    accountsInArea: [],
    providersInArea: [],
    providerInfo: providerData,
    reviews: [],
    totalReviews: 0,
  };
  yield put(actions.setProfile(userData));
}

export function* profilePageSaga() {
  yield takeLatest(actions.changeId, getProfile);
}
