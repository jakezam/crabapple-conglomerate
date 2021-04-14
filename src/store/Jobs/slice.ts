import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddedSuggestedTime,
  ContainerState,
  SuggestedTime,
  UpdatedSuggestedTime,
} from 'store/Jobs/types';
import { PayloadAction } from '@reduxjs/toolkit';

// Date Utility Function //
//Add hours to a dateTime//
// @ts-ignore
// eslint-disable-next-line
Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};
///////////////////////////

export const initialState: ContainerState = {
  userId: '',
  selectedJob: 0,
  jobs: [
    {
      jobId: 0,
      userId: '',
      username: 'Jacob Zamani',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Permanant Landscaper',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: true,
      beginDate: 'October 10, 2020',
      suggestedTimes: [],
      isOngoing: true,
      isProviding: true,
      wasModified: false,
    },
    {
      jobId: 1,
      userId: '',
      username: 'Thomas Arturi',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Weed Wacking',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: true,
      beginDate: 'October 31, 2020',
      suggestedTimes: [],
      isOngoing: false,
      isProviding: true,
      wasModified: true,
    },
    {
      jobId: 2,
      userId: '',
      username: 'Madison Daniels',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Branch Trimming',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: false,
      beginDate: 'November 5, 2020',
      suggestedTimes: [],
      isOngoing: false,
      isProviding: true,
      wasModified: false,
    },
    {
      jobId: 3,
      userId: '',
      username: 'Austin Jose',
      phoneNumber: '(XXX)-XXX-XXXX',
      emailAddress: 'joe@schmoe.com',
      jobTitle: 'Company Commercial Film',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      isAccepted: false,
      beginDate: 'January 14, 2021',
      suggestedTimes: [],
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
    addSuggestedTime(
      state: ContainerState,
      action: PayloadAction<AddedSuggestedTime>,
    ) {
      // TODO: Add a JobID to state to filter by
      state.jobs[action.payload.jobId].suggestedTimes.push(
        action.payload.suggestedTime,
      );
    },
    updateSuggestedTimes(
      state: ContainerState,
      action: PayloadAction<UpdatedSuggestedTime>,
    ) {
      // TODO: Add a JobID to state to filter by
      Object.assign(
        state.jobs[action.payload.jobId].suggestedTimes[
          action.payload.suggestedTimeId
        ],
        action.payload.suggestedTime,
      );
    },
    setSelectedJob(state: ContainerState, action: PayloadAction<number>) {
      state.selectedJob = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = jobsSlice;
