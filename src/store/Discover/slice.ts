import { createSlice } from 'utils/@reduxjs/toolkit';
import { Category, ContainerState, SmallAccount } from 'store/Discover/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  resultsPageLoading: false,
  discoverPageLoading: false,
  categories: [],
  categoryQuery: '',
  keywordQuery: '',
  filterByRating: true,
  recentlyViewed: [],
  searchResults: [],
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
    updateCategoryQuery(state: ContainerState, action: PayloadAction<string>) {
      state.categoryQuery = action.payload;
    },
    updateKeywordQuery(state: ContainerState, action: PayloadAction<string>) {
      state.keywordQuery = action.payload;
    },
    setFilterKey(state: ContainerState, action: PayloadAction<boolean>) {
      state.filterByRating = action.payload;
    },
    initiateDiscoverSaga(
      state: ContainerState,
      action: PayloadAction<Array<Category>>,
    ) {
      state.categories = action.payload;
    },
    setCategories(
      state: ContainerState,
      action: PayloadAction<Array<Category>>,
    ) {
      state.categories = action.payload;
    },
    setSearchResults(
      state: ContainerState,
      action: PayloadAction<Array<SmallAccount>>,
    ) {
      state.searchResults = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = discoverSlice;
