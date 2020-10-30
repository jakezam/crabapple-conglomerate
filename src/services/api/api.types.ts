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

export interface IProvider {
  id: number;
  ProviderId: number;
  Company: string;
  Category: string;
  Website: string;
  Rating: number;
}

export interface PostUserCreateRequest {
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  Gender: string;
  State: string;
}

export interface PostProviderCreateRequest {
  ProviderId: number;
  Company: string;
  Category: string;
  Website?: string;
}

export type PostUserCreateResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type PostProviderCreateResponse =
  | { kind: 'ok'; response?: IProvider }
  | GeneralApiProblem;

export type GetUsersResponse =
  | { kind: 'ok'; response: IUser }
  | GeneralApiProblem;
