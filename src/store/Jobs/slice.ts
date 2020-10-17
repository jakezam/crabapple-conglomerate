import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/Jobs/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  jobs: [
    {
      userId: '',
      username: 'Jacob Zamani',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Permanant Landscaper',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: true,
      beginDate: 'October 10, 2020',
      isOngoing: true,
      isProviding: true,
      wasModified: false,
    },
    {
      userId: '',
      username: 'Grace Vocalina',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Leaf Cleaning',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: true,
      beginDate: 'October 31, 2020',
      isOngoing: false,
      isProviding: true,
      wasModified: true,
    },
    {
      userId: '',
      username: 'Madison Daniels',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Branch Trimming',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: false,
      beginDate: 'November 5, 2020',
      isOngoing: false,
      isProviding: true,
      wasModified: false,
    },
    {
      userId: '',
      username: 'Austin Jose',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Company Commercial Film',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: false,
      beginDate: 'January 14, 2021',
      isOngoing: false,
      isProviding: false,
      wasModified: false,
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
