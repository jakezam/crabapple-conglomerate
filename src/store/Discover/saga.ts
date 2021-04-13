import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectDiscover } from './selectors';
import { env } from '../environment';
import { DiscoverState, SmallAccount, ProviderSkills, Category } from './types';
import { GetProviderTypesResponse } from '../../services/api';
import { type } from 'node:os';

function* getSearchedUsers() {
  yield put(actions.setResultsPageLoading(true));
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

  yield put(actions.setResultsPageLoading(false));
}

export function* discoverPageSaga() {
  yield takeLatest(actions.updateQuery, getSearchedUsers);
  yield takeLatest(actions.initiateDiscoverSaga, setUpDiscoverPage);
}
