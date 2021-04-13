import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ViewedUserState } from 'store/ViewedUser/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: "1",
  isLoading: false,
  firstName: 'Jacob',
  lastName: 'Zamani',
  isProvider: true,
  isSelf: false,
  numFollowing: 0,
  followerCount: 0,
  isFollowing: false,
  accountsInArea: [
    {
      userId: '2',
      firstName: 'Nick',
      lastName: 'Arnold',
      isProvider: false,
      providerInfo: {
        companyName: '',
        category: '',
        rating: 0,
      },
      profileTag: 'Found nearby',
    },
    {
      userId: '3',
      firstName: 'Grace',
      lastName: 'Vocalina',
      isProvider: false,
      providerInfo: {
        companyName: '',
        category: '',
        rating: 0,
      },
      profileTag: 'Mutual Friends',
    },
  ],
  providersInArea: [
    {
      userId: '4',
      firstName: 'First',
      lastName: 'Last',
      isProvider: true,
      providerInfo: {
        companyName: 'Developers Anonymous',
        category: 'Freelance Developers',
        rating: 3,
      },
      profileTag: 'Found nearby',
    },
    {
      userId: '5',
      firstName: 'First',
      lastName: 'Last',
      isProvider: true,
      providerInfo: {
        companyName: 'Kool Kids Klub',
        category: 'Freelance Developers',
        rating: 2,
      },
      profileTag: 'Found nearby',
    },
  ],
  providerInfo: {
    companyName: 'Web Developer Plus',
    websiteURL: 'https://www.website.com',
    category: 'Main Category',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
    rating: 0.0,
    location: 'Shelton, CT',
    otherCategoryAccounts: [],
    previousJobs: [],
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
    {
      username: 'Frankie Arturi',
      rating: 2,
      title: 'BAD Service',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: '1 month ago',
      wouldRecommend: false,
      numLikes: 0,
      numDislikes: 0,
      // userLiked: false,
      // userDisliked: false,
    },
    {
      username: 'Joshua Zamani',
      rating: 5,
      title: 'Amazing Service',
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
  notFound: false,
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
    setPageLoading(state: ContainerState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setProfile(state: ContainerState, action: PayloadAction<ContainerState>) {
      state.isLoading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isProvider = action.payload.isProvider;
      state.isSelf = action.payload.isSelf;
      state.numFollowing = action.payload.numFollowing;
      state.followerCount = action.payload.followerCount;
      state.isFollowing = action.payload.isFollowing;
      state.accountsInArea = action.payload.accountsInArea;
      state.providersInArea = action.payload.providersInArea;
      state.providerInfo = action.payload.providerInfo;
      // state.reviews = action.payload.reviews;
      state.totalReviews = action.payload.totalReviews;
    },
    setPageNotFound(state: ContainerState, action: PayloadAction<boolean>) {
      state.notFound = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = viewedUserSlice;
