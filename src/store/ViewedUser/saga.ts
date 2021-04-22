import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectViewedUser, selectViewedUserId } from './selectors';
import { env } from '../environment';
import { ViewedUserState, ProviderAddition } from './types';
import { GetUsersResponse, GetProvidersResponse } from '../../services/api';
import { SmallAccount } from 'store/Discover/types';

function* getProfile() {
  yield put(actions.setPageLoading(true));
  let userData: ViewedUserState;
  let providerData: ProviderAddition = {
    companyName: '',
    about: '',
    category: '',
    subcategories: [],
    rating: 0,
    location: '',
  };
  let nearbyProviders: Array<SmallAccount> = [];
  let isProvider = false;

  const currState = yield select(selectViewedUser);
  const id = yield select(selectViewedUserId);
  console.log('Profile Page Saga: Fetching User State for user', id);
  const userResponse: GetUsersResponse = yield env.api.GetUserById(id);
  console.log('GET USER: RESPONSE => ', userResponse);

  if (userResponse.kind !== 'ok') {
    console.log('User not found');
    yield put(actions.setPageLoading(false));
    yield put(actions.setPageNotFound(true));
    return;
  }

  const providerResp: GetProvidersResponse = yield env.api.GetProvidersById(id);
  console.log('GET PROVIDER DATA: RESPONSE => ', providerResp);

  if (providerResp.kind !== 'ok') {
    console.log('User is not a provider');
  } else {
    isProvider = true;
    let location = providerResp.response
      ? providerResp.response.city + ', ' + providerResp.response.state
      : '';
    providerData = {
      companyName: providerResp.response ? providerResp.response.company : '',
      about: providerResp.response ? providerResp.response.about : '',
      category: providerResp.response ? providerResp.response.category : '',
      subcategories: currState.providerInfo.subcategories,
      rating: providerResp.response ? providerResp.response.rating : 0,
      location: providerResp.response ? location : '',
    };
  }

  if (isProvider) {
    const nearbyProviderResp: GetProvidersResponse = yield env.api.GetProvidersByCategory(
      providerData.category,
    );
    console.log(
      'GET NEARBY PROVIDERS: RESPONSE => ',
      nearbyProviderResp.response,
    );

    if (nearbyProviderResp.response) {
      for (let i = 0; nearbyProviderResp.response[i]; i++) {
        if (id === nearbyProviderResp.response[i].providerId) {
          continue;
        }

        let providerLocation =
          nearbyProviderResp.response[i].city +
          ', ' +
          nearbyProviderResp.response[i].state;

        const user: SmallAccount = {
          userId: nearbyProviderResp.response[i].providerId,
          username: nearbyProviderResp.response[i].company,
          userTag: nearbyProviderResp.response[i].company,
          isProvider: true,
          providerData: {
            category: nearbyProviderResp.response[i].category,
            rating: nearbyProviderResp.response[i].rating,
            location: providerLocation,
            skills: [],
          },
        };
        nearbyProviders.push(user);
      }
    }
  }
  console.log(nearbyProviders);

  userData = {
    userId: userResponse.response
      ? userResponse.response.userId.valueOf()
      : '0',
    isLoading: false,
    firstName: userResponse.response ? userResponse.response.firstName : '',
    lastName: userResponse.response ? userResponse.response.lastName : '',
    isProvider: isProvider,
    isSelf: false,
    providersInArea: nearbyProviders,
    providerInfo: providerData,
    reviews: [],
    notFound: false,
  };
  yield put(actions.setProfile(userData));
}

export function* profilePageSaga() {
  yield takeLatest(actions.changeId, getProfile);
}
