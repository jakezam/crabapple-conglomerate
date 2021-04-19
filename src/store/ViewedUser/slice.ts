import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ViewedUserState } from 'store/ViewedUser/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '1',
  isLoading: false,
  firstName: 'Jacob',
  lastName: 'Zamani',
  isProvider: true,
  isSelf: false,
  providersInArea: [],
  providerInfo: {
    companyName: 'Web Developer Plus',
    about: '',
    category: 'Main Category',
    subcategories: [
      {
        subcategory: 'Kitchens',
        hourlyRate: 0,
        flatRate: 0,
        consultationFees: -1,
      },
      {
        subcategory: 'Bathrooms',
        hourlyRate: 0,
        flatRate: 0,
        consultationFees: -1,
      },
    ],
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
    },
  ],
  notFound: false,
};

const viewedUserSlice = createSlice({
  name: 'viewedUser',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
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
      state.providersInArea = action.payload.providersInArea;
      state.providerInfo = action.payload.providerInfo;
      // state.reviews = action.payload.reviews;
    },
    setPageNotFound(state: ContainerState, action: PayloadAction<boolean>) {
      state.notFound = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = viewedUserSlice;
