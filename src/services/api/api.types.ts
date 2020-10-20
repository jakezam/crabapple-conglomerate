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

export interface IProvider {
  providerId: number;
  company: string;
  category: string;
  website: string;
  rating: number;
}

export type PostUserCreateResponse =
  | { kind: 'ok'; response: IUser }
  | GeneralApiProblem;

export type GetUsersResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type GetProvidersResponse =
  | { kind: 'ok'; response?: IProvider }
  | GeneralApiProblem;
