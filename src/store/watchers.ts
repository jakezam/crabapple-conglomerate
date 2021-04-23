/* Add your watchers here, watchers are just functions that
will fire off a saga when an action is fired */

// Package Imports//
import { all, takeLatest } from 'redux-saga/effects';
import { spawnSaga } from 'store/helpers';

// State Imports //

// import { updateSignUp } from './SignUp/saga';

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
  // yield watch(signUp.actions.setUserCreated, updateSignUp);
}

// export function* watchSignIn() {
//   yield watch();
//   // Actions to watch
// }
