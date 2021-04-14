import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectUserData } from './selectors';
import { env } from '../environment';
import {
  PostUserCreateRequest,
  PostUserCreateResponse,
} from '../../services/api';
import { IUserData } from './types';

// Step 0 - init user //
function* createUser() {
  yield put(actions.setCreatingAccount(true));
  console.log('DEBUG SignUpSaga: Fetching User State');
  const userData: IUserData = yield select(selectUserData);

  const postBody: PostUserCreateRequest = {
    FirstName: userData.firstName,
    LastName: userData.lastName,
    DateOfBirth: new Date().toJSON(),
    Gender: 'none', // Might end up removing these fields from DB
    State: 'none', // Might end up removing these fields from DB
  };

  console.log('DEBUG SignUpSaga: POST USER');
  const postResponse: PostUserCreateResponse = yield env.api.PostCreateUser(
    postBody,
  );
  console.log('DEBUG SignUpSaga: RESPONSE DATA =>, ', postResponse);
  console.log('DEBUG SignUpSaga: RESPONSE KIND =>, ', postResponse.kind);

  if (postResponse.kind !== 'ok') {
    console.log('DEBUG SignUpSaga: Failure to create user, see response KIND!');
    yield put(actions.setCreatingAccount(false));
    yield put(actions.setUnableToCreate(true));
  } else {
    console.log('DEBUG SignUpSaga: Success creating user!');
    // This is sus TypeScript, at this point we should NEVER have an invalid UserID.
    // We might want to remake the API system to make this... better? More Robust?
    yield put(
      actions.setUserId(postResponse.response?.userId.toString() ?? ''),
    );
    yield put(actions.setCreatingAccount(false));
    yield put(actions.incrementStep());
  }
}

// Step 2 - init provider //
function* createProvider() {}

export function* signUpPageSaga() {
  /* Watch both actions, in the future we want to be able to save
   * user data even if they are not yet finished with creating their account.
   * This way we can send reminder emails, or have their spot saved when they come
   * back */
  yield takeLatest(actions.setUserData, createUser);
  yield takeLatest(actions.setProviderData, createProvider);
}
