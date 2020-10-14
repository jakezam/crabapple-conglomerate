/* eslint-disable  @typescript-eslint/no-unused-vars */

import { put, select, call } from 'redux-saga/effects';
import { selectStep } from './selectors';
import { actions } from './slice';

export function* updateSignUp() {
  console.log('Fetching User State');

  yield put(actions.decrementStep());
}
