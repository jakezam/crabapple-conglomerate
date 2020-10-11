import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/ViewedUser/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  firstName: 'Jacob',
  lastName: 'Zamani',
  isProvider: false,
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
