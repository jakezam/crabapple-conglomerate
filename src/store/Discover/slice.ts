import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/Discover/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  recentlyViewed: [],
  searchResults: [
    {
      userId: '',
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
      userId: '',
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
      userId: '',
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
      userId: '',
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
      userId: '',
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
      userId: '',
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
  },
});

export const { actions, reducer, name: sliceKey } = discoverSlice;
