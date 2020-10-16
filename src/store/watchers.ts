// Package Imports//
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { spawnSaga } from 'store/helpers';

// State Imports //
import * as signUp from './SignUp/slice';
import { updateSignUp } from './SignUp/saga';

interface IType {
  type: string;
}

function* watch<TAction extends IType>(
  action: TAction,
  ...sagas: Array<(action?: any) => any>
) {
  yield takeLatest(action.type, function* () {
    yield all(sagas.map(spawnSaga));
  });
}

export function* watchSignUp() {
  yield watch(signUp.actions.incrementStep, updateSignUp);
}

// export function* watchSignIn() {
//   yield watch();
//   // Actions to watch
// }
