import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/Jobs/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  isProvider: true,
  jobs: [
    {
      userId: '',
      username: 'Test 1',
      jobTitle: '',
      jobDescription: '',
      isAccepted: true,
      beginDate: '',
      isOngoing: true,
    },
    {
      userId: '',
      username: 'Test 2',
      jobTitle: '',
      jobDescription: '',
      isAccepted: true,
      beginDate: '',
      isOngoing: true,
    },
    {
      userId: '',
      username: 'Test 3',
      jobTitle: '',
      jobDescription: '',
      isAccepted: true,
      beginDate: '',
      isOngoing: true,
    },
  ],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = jobsSlice;
