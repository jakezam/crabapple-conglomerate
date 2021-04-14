import { GeneralApiProblem } from './api.problem';

export interface IUser {
  userId: string;
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

export interface PostConsultationRequestCreateRequest {
  To: string;
  From: string;
  ProviderCategory: string;
  Message: string;
}

export interface IProvider {
  providerId: number;
  company: string;
  category: string;
  website: string;
  rating: number;
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

export type PostUserCreateResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type PostProviderCreateResponse =
  | { kind: 'ok'; response?: IProvider }
  | GeneralApiProblem;

export type PostConsultationRequestCreateResponse =
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
