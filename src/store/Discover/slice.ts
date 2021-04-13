import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ISearchQuery } from 'store/Discover/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  resultsPageLoading: false,
  discoverPageLoading: false,
  categories: [],
  searchQuery: '',
  categorySearch: false,
  filterByRating: true,
  recentlyViewed: [
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: 'Jacob Zamani',
      userTag: '',
      isProvider: false,
      providerData: {
        category: '',
        rating: -1,
        location: '',
        skills: [],
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
        skills: [],
      },
    },
    {
      userId: 'ac784650-a769-40a1-8a67-08d8ce2fd834',
      username: 'Shelton Home Repairs',
      userTag: 'Shelton Home Repairs',
      isProvider: true,
      providerData: {
        category: 'Home Repair',
        rating: 4,
        location: 'Shelton CT',
        skills: [],
      },
    },
  ],
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
  ],
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setResultsPageLoading(
      state: ContainerState,
      action: PayloadAction<boolean>,
    ) {
      state.resultsPageLoading = action.payload;
    },
    setDiscoverPageLoading(
      state: ContainerState,
      action: PayloadAction<boolean>,
    ) {
      state.discoverPageLoading = action.payload;
    },
    updateQuery(state: ContainerState, action: PayloadAction<ISearchQuery>) {
      state.searchQuery = action.payload.query;
      state.categorySearch = action.payload.isCategory;
    },
    setFilterKey(state: ContainerState, action: PayloadAction<boolean>) {
      state.filterByRating = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = discoverSlice;
