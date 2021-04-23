import { put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { env } from '../environment';
import { selectPostingUserId, selectReceivingUserId } from './selectors';
import { GetReviewSetResponse } from '../../services/api';
import { Review } from './types';

function* getReviews() {
  yield put(actions.setLoadingStatus(true));

  const id = yield select(selectReceivingUserId);
  const userId = yield select(selectPostingUserId);
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
        if (reviewResp.response[i].userId === parseInt(userId, 10)) {
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
  yield put(actions.clearState());
  console.log('Ready to post review');
}

export function* reviewSaga() {
  yield takeLatest(actions.setRecommendationStatus, postReview);
  yield takeLatest(actions.setReceivingUserId, getReviews);
}
