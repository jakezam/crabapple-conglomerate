export interface JobsState {
  userId: string;
  isProvider: boolean;
  jobs: Array<Job>;
}

export interface Job {
  userId: string;
  username: string;
  jobTitle: string;
  jobDescription: string;
  isAccepted: boolean;
  beginDate: string;
  isOngoing: boolean;
}

export type ContainerState = JobsState;
