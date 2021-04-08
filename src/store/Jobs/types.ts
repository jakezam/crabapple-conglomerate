export interface JobsState {
  userId: string;
  selectedJob: string;
  jobs: Array<Job>;
}

export interface Job {
  jobId: string;
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
  id: string;
  beginTime: string;
  endTime: string;
}

export interface AddedSuggestedTime {
  jobId: string;
  suggestedTime: SuggestedTime;
}

export interface UpdatedSuggestedTime {
  jobId: string;
  suggestedTimeId: string;
  suggestedTime: SuggestedTime;
}

export type ContainerState = JobsState;
