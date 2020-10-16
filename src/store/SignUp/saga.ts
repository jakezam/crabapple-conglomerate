import { put, select, call } from 'redux-saga/effects';
import { selectStep } from './selectors';
import { actions } from './slice';

export function* updateSignUp() {
  const step = yield select(selectStep);
  yield put(actions.decrementStep());
}
