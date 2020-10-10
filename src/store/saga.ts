import { all } from 'redux-saga/effects';
import { spawnSaga } from 'store/helpers';
import { watchSignUp } from './watchers';

export function* initSagas() {
  // Watchers can spawn cascading updates
  yield all([watchSignUp].map(spawnSaga));

  // One time updates (independent) using spawn
  // yield spawn(/*SLICE REDUCER*/)
}
