import { put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { actions as profileActions } from '../ViewedUser/slice';
import { env } from '../environment';
import { selectReceivingUserId, selectReview } from './selectors';
import {
  GetReviewSetResponse,
  PostReviewCreateRequest,
  PostReviewCreateResponse,
} from '../../services/api';
import { Review } from './types';
import { selectLoginId } from 'store/Login/selectors';
import { selectUserId } from 'store/SignUp/selectors';

function* getReviews() {
  yield put(actions.setLoadingStatus(true));

  const id = yield select(selectReceivingUserId);
  const userId = yield select(selectLoginId);
  console.log('Ready to get reviews');
  let reviews: Array<Review> = [];

  console.log('Review Saga: Fetching Reviews for user', id);
  const reviewResp: GetReviewSetResponse = yield env.api.GetProviderReviews(id);
  console.log('GET REVIEWS: RESPONSE => ', reviewResp);

  if (reviewResp.kind !== 'ok') {
    console.log('No reviews found');
  } else {
    if (reviewResp.response) {
      for (let i = 0; reviewResp.response[i]; i++) {
        if (reviewResp.response[i].userId === userId) {
          yield put(actions.setPageReviewed(true));
        }
        const temp: Review = {
          reviewId: reviewResp.response[i].reviewId,
          username: reviewResp.response[i].username,
          rating: reviewResp.response[i].rating,
          title: reviewResp.response[i].header,
          message: reviewResp.response[i].description,
          date: '1 month ago',
          wouldRecommend: reviewResp.response[i].wouldRecommend,
        };
        reviews.push(temp);
      }
    }
  }

  yield put(actions.setReviews(reviews));

  yield put(actions.setLoadingStatus(false));
}

function* postReview() {
  const reviewState = yield select(selectReview);
  const userId = yield select(selectUserId);

  const postBody: PostReviewCreateRequest = {
    receivingUserId: reviewState.receivingUserId,
    userId: userId,
    username: reviewState.username,
    rating: reviewState.rating,
    header: reviewState.header,
    description: reviewState.description,
    wouldRecommend: reviewState.isRecommending,
  };

  const postResponse: PostReviewCreateResponse = yield env.api.PostCreateReview(
    postBody,
  );

  console.log('DEBUG SignUpSaga: RESPONSE DATA =>, ', postResponse.response);
  console.log('DEBUG SignUpSaga: RESPONSE KIND =>, ', postResponse.kind);

  yield put(actions.clearState());
  yield put(profileActions.changeId(reviewState.receivingUserId));
  console.log('Ready to post review');
}

export function* reviewSaga() {
  yield takeLatest(actions.setRecommendationStatus, postReview);
  yield takeLatest(actions.setReceivingUserId, getReviews);
}
