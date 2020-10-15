import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Review } from 'store/ViewedUser/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  firstName: 'Jacob',
  lastName: 'Zamani',
  isProvider: true,
  isSelf: false,
  numFollowing: 0,
  followerCount: 0,
  isFollowing: false,
  providerInfo: {
    companyName: 'Web Developer Plus',
    websiteURL: 'https://www.website.com',
    category: 'Main Category',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
    rating: 0.0,
    location: 'Shelton, CT',
  },
  reviews: [
    {
      username: 'Thomas Arturi',
      rating: 4,
      title: 'Awesome Service',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: '1 month ago',
      wouldRecommend: true,
      numLikes: 0,
      numDislikes: 0,
      // userLiked: false,
      // userDisliked: false,
    },
    {
      username: 'Jacob Zamani',
      rating: 5,
      title: 'Outstanding Service',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: '1 month ago',
      wouldRecommend: true,
      numLikes: 0,
      numDislikes: 0,
      // userLiked: false,
      // userDisliked: false,
    },
  ],
  totalReviews: 2,
};

const viewedUserSlice = createSlice({
  name: 'viewedUser',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    changeFollowStatus(state: ContainerState) {
      state.isFollowing = !state.isFollowing;
    },
  },
});

export const { actions, reducer, name: sliceKey } = viewedUserSlice;
