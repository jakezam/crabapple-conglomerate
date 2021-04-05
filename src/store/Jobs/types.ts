export interface JobsState {
  userId: string;
  jobs: Array<Job>;
}

export interface Job {
  userId: string;
  username: string;
  phoneNumber: string;
  emailAddress: string;
  jobTitle: string;
  jobDescription: string;
  isAccepted: boolean;
  beginDate: string;
  suggestedTimes: Array<SuggestedTime>;
  isOngoing: boolean;
  isProviding: boolean;
  wasModified: boolean;
}

export interface SuggestedTime {
  date: string;
  beginTime: string;
  endTime: string;
}

export type ContainerState = JobsState;
