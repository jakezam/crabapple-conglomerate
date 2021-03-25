import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectDiscover } from './selectors';
import { env } from '../environment';
import { DiscoverState, SmallAccount, ProviderSkills } from './types';

function* getSearchedUsers() {
  yield put(actions.setPageLoading(true));
  yield put(actions.setPageLoading(false));
}

export function* discoverPageSaga() {
  yield takeLatest(actions.updateQuery, getSearchedUsers);
}