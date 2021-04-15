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

export interface IProvider {
  providerId: string;
  company: string;
  category: string;
  website: string;
  rating: number;
  expertiseLevel: string;
  about: string;
  streetAddress: string;
  aptNum: string;
  city: string;
  state: string;
  zip: string;
  createdDate: string;
}

export interface IReview {
  createdDate: string;
  description: string;
  header: string;
  rating: number;
  receivingUserId: number;
  reviewId: number;
  userId: number;
  username: string;
  wouldRecommend: boolean;
}

export interface ReviewSet {
  reviews: Array<IReview>;
}

export interface PostProviderCreateRequest {
  ProviderId: number;
  Company: string;
  Category: string;
  Website?: string;
}
export interface IProviderType {
  typeId: string;
  category: string;
  description: string;
}

export type PostUserCreateResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type PostProviderCreateResponse =
  | { kind: 'ok'; response?: IProvider }
  | GeneralApiProblem;

export type GetUsersResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type GetProvidersResponse =
  | { kind: 'ok'; response?: IProvider }
  | GeneralApiProblem;

export type GetReviewSetResponse =
  | { kind: 'ok'; response?: ReviewSet }
  | GeneralApiProblem;

export type GetProviderTypesResponse =
  | { kind: 'ok'; response?: IProviderType }
  | GeneralApiProblem;
