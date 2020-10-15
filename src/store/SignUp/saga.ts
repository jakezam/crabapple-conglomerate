import { takeLatest, select, put } from 'redux-saga/effects';
import { actions } from './slice';
import { selectUserData } from './selectors';
import { env } from '../environment';
import { IUser } from './types';
import {
  GetUsersResponse,
  PostUserCreateRequest,
  PostUserCreateResponse,
} from '../../services/api';

function* createUser() {
  yield put(actions.setCreatingAccount(true));
  console.log('SignUpSaga: Fetching User State');
  const userData: IUser = yield select(selectUserData);
  const postBody: PostUserCreateRequest = {
    FirstName: userData.firstName,
    LastName: userData.lastName,
    DateOfBirth: new Date(),
    Gender: '',
    State: '',
  };

  console.log('SignUpSaga: GET USERS');
  const getResponse: GetUsersResponse = yield env.api.GetUsers();
  console.log('SignUpSaga: RESPONSE => ', getResponse);

  console.log('SignUpSaga: POST USER');
  const postResponse: PostUserCreateResponse = yield env.api.PostCreateUser(
    postBody,
  );
  console.log('SignUpSaga: RESPONSE DATA =>, ', postResponse);
  console.log('SignUpSaga: RESPONSE KIND =>, ', postResponse.kind);

  if (typeof postResponse.kind !== 'undefined') {
    console.log('SignUpSaga: Failure to create user, see response KIND!');
    yield put(actions.setCreatingAccount(false));
    yield put(actions.setUnableToCreate(true));
  } else {
    console.log('SignUpSaga: Success creating user!');
    yield put(actions.setCreatingAccount(false));
    yield put(actions.incrementStep());
  }
}

export function* signUpPageSaga() {
  yield takeLatest(actions.setUserData, createUser);
}
