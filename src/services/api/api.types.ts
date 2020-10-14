import { GeneralApiProblem } from './api.problem';

export interface IUser {
  userId: Number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  state: string;
  createdDate: Date;
}

export interface PostUserCreateRequest {
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  Gender: string;
  State: string;
}

export type PostUserCreateResponse =
  | { kind: 'ok'; response: IUser }
  | GeneralApiProblem;

export type GetUsersResponse =
  | { kind: 'ok'; response: IUser }
  | GeneralApiProblem;
