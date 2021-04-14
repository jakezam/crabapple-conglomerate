export interface JobsState {
  userId: string;
  selectedJob: number;
  jobs: Array<Job>;
}

export interface Job {
  jobId: number;
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
  jobId: number;
  suggestedTime: SuggestedTime;
}

export interface UpdatedSuggestedTime {
  jobId: number;
  suggestedTimeId: number;
  suggestedTime: any;
}

export type ContainerState = JobsState;
