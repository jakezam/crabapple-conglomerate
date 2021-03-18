import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Review } from 'store/Review/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: 7,
  receivingUserId: 2,
  username: '',
  rating: 0,
  header: '',
  description: '',
  isRecommending: false,
  leftReview: false,
  isLoading: false,
  currReviews: [
    {
      reviewId: 1,
      username: 'Thomas Arturi',
      rating: 4,
      title: 'Awesome Service',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: '1 month ago',
      wouldRecommend: true,
    },
  ],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReceivingUserId(state: ContainerState, action: PayloadAction<number>) {
      state.receivingUserId = action.payload;
    },
    setLoadingStatus(state: ContainerState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setPageReviewed(state: ContainerState, action: PayloadAction<boolean>) {
      state.leftReview = action.payload;
    },
    clearState(state: ContainerState) {
      // state.userId = 1;
      // state.receivingUserId = 2;
      state.rating = 0;
      state.header = '';
      state.description = '';
      state.isRecommending = false;
    },
    setRating(state: ContainerState, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    setHeader(state: ContainerState, action: PayloadAction<string>) {
      state.header = action.payload;
    },
    setDescription(state: ContainerState, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setRecommendationStatus(
      state: ContainerState,
      action: PayloadAction<boolean>,
    ) {
      state.isRecommending = action.payload;
    },
    setReviews(state: ContainerState, action: PayloadAction<Array<Review>>) {
      state.currReviews = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = reviewSlice;
