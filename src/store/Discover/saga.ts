import { put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectDiscover } from './selectors';
import { env } from '../environment';
import { Category, DiscoverState, SmallAccount } from './types';
import {
  GetProvidersResponse,
  GetProviderTypesResponse,
} from '../../services/api';

function* getCategoryUsers() {
  yield put(actions.setResultsPageLoading(true));
  let results: Array<SmallAccount> = [];
  const state: DiscoverState = yield select(selectDiscover);
  let category = state.categoryQuery;

  const searchResults: GetProvidersResponse = yield env.api.GetProvidersByCategory(
    category,
  );
  console.log('GET SEARCH RESULTS: RESPONSE => ', searchResults.response);

  if (searchResults.response) {
    for (let i = 0; searchResults.response[i]; i++) {
      let providerLocation =
        searchResults.response[i].city + ', ' + searchResults.response[i].state;

      const user: SmallAccount = {
        userId: searchResults.response[i].providerId,
        username: searchResults.response[i].company,
        userTag: searchResults.response[i].company,
        isProvider: true,
        providerData: {
          category: searchResults.response[i].category,
          rating: searchResults.response[i].rating,
          location: providerLocation,
          skills: [],
        },
      };
      console.log(user);
      results.push(user);
    }
  }
  yield put(actions.setSearchResults(results));
  yield put(actions.setResultsPageLoading(false));
}

function* setUpDiscoverPage() {
  yield put(actions.setResultsPageLoading(true));
  let categories: Array<Category> = [];

  const typesResponse: GetProviderTypesResponse = yield env.api.GetProviderTypes();
  console.log('GET PROVIDER TYPES: RESPONSE => ', typesResponse);

  if (typesResponse.response) {
    for (let i = 0; typesResponse.response[i]; i++) {
      const type: Category = {
        typeId: typesResponse.response[i].typeId,
        category: typesResponse.response[i].category,
        description: typesResponse.response[i].description,
      };
      categories.push(type);
    }
  }

  yield put(actions.setCategories(categories));
  yield put(actions.setResultsPageLoading(false));
}

export function* discoverPageSaga() {
  yield takeLatest(actions.updateCategoryQuery, getCategoryUsers);
  yield takeLatest(actions.initiateDiscoverSaga, setUpDiscoverPage);
}
