import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ISearchQuery } from 'store/Discover/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  pageLoading: false,
  searchQuery: '',
  categorySearch: false,
  recentlyViewed: [],
  searchResults: [
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: "Jordan's Contracting",
      userTag: "Jordan's Contracting",
      isProvider: true,
      providerData: {
        category: 'Contracting',
        rating: 4,
        location: 'Shelton CT',
        skills: [
          {
            name: 'Kitchens',
            rate: 'N/A',
          },
          {
            name: 'Bathrooms',
            rate: 'N/A',
          },
        ],
      },
    },
  ],
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setPageLoading(state: ContainerState, action: PayloadAction<boolean>) {
      state.pageLoading = action.payload;
    },
    updateQuery(state: ContainerState, action: PayloadAction<ISearchQuery>) {
      state.searchQuery = action.payload.query;
      state.categorySearch = action.payload.isCategory;
    },
  },
});

export const { actions, reducer, name: sliceKey } = discoverSlice;