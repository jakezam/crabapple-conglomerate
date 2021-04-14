import { GeneralApiProblem } from './api.problem';
import { Expertise } from '../../store/SignUp/types';

export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  state: string;
  createdDate: Date;
}

// export interface PostProvider {
//   id: number;
//   ProviderId: number;
//   Company: string;
//   Category: string;
//   Website: string;
//   ExpertiseLevel: string;
//   About: string;
//   StreetAddress: string;
//   AptNum: string;
//   City: string;
//   State: string;
//   Zip: string;
// }

export interface PostUserCreateRequest {
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
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

export interface ProviderResponse {
  providerId: string;
  company: string;
  category: string;
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
  ProviderId: string;
  Company: string;
  Category: string;
  Website: string;
  ExpertiseLevel: string;
  About: string;
  StreetAddress: string;
  AptNum: string;
  City: string;
  State: string;
  Zip: string;
}

export type PostUserCreateResponse =
  | { kind: 'ok'; response?: IUser }
  | GeneralApiProblem;

export type PostProviderCreateResponse =
  | {
      kind: 'ok';
      response?: ProviderResponse;
    }
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
