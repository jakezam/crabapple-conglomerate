export interface JobsState {
  userId: string;
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
  isProviding: boolean;
  wasModified: boolean;
}

export type ContainerState = JobsState;
