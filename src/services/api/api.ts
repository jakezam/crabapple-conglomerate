/* eslint-disable  @typescript-eslint/no-unused-vars */

import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from './api.problem';
import { ApiConfig, DEFAULT_API_CONFIG } from './api.config';
import * as Types from './api.types';
import {
  IUser,
  PostUserCreateRequest,
  GetProvidersResponse,
  IProvider,
  ReviewSet,
  PostProviderCreateRequest,
  IProviderType,
  GetProviderTypesResponse,
} from './api.types';
import * as https from 'https';

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance;

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        crossDomain: true,
        Accept: 'application/json',
      },
    });
  }

  /**
   * Create A User
   */
  async PostCreateUser(
    user: PostUserCreateRequest,
  ): Promise<Types.PostUserCreateResponse> {
    const response: ApiResponse<IUser> = await this.apisauce.post('api/users', {
      FirstName: user.FirstName,
      LastName: user.LastName,
      DateOfBirth: user.DateOfBirth,
      Gender: user.Gender,
      State: user.State,
    });

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return { kind: 'ok', response: response.data };
  }

  /**
   * Create A Provider
   */
  async PostCreateProvider(
    provider: PostProviderCreateRequest,
  ): Promise<Types.PostProviderCreateResponse> {
    const response: ApiResponse<IProvider> = await this.apisauce.post(
      'api/provider',
      {
        ProviderId: provider.ProviderId,
        Company: provider.Company,
        Category: provider.Category,
        Website: provider.Website,
      } as PostProviderCreateRequest,
    );

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return { kind: 'ok', response: response.data };
  }

  /**
   * Get All Users
   */
  async GetUserById(id: string): Promise<Types.GetUsersResponse> {
    const route = 'api/users/' + id;
    const response: ApiResponse<IUser> = await this.apisauce.get(route);

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return { kind: 'ok', response: response.data };
  }

  /**
   * Get All Users
   */
  async GetProviders(): Promise<Types.GetProvidersResponse> {
    const response: ApiResponse<any> = await this.apisauce.get('api/providers');

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  }

  /**
   * Create A Provider
  //  */
  // async UpdateProvider(
  //   provider: UpdateProviderRequest,
  //   id: string,
  // ): Promise<Types.UpdateProviderResponse> {
  //   const route = 'api/providers/' + id;
  //   const response: ApiResponse<IProvider> = await this.apisauce.post(
  //     route,
  //     {
  //       ProviderId: provider.ProviderId,
  //       Company: provider.Company,
  //       Category: provider.Category,
  //       Website: provider.Website,
  //     } as UpdateProviderRequest,
  //   );

  //   // TEMP DEBUG //
  //   console.log('== Logging API Response: ', await response, ' ==');

  //   if (!response.ok) {
  //     const problem = getGeneralApiProblem(response);
  //     if (problem) return problem;
  //   }

  //   return { kind: 'ok', response: response.data };
  // }

  /**
   * Get All Users
   */
  async GetProvidersById(id: string): Promise<Types.GetProvidersResponse> {
    const route = 'api/providers/' + id;
    const response: ApiResponse<IProvider> = await this.apisauce.get(route);

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return { kind: 'ok', response: response.data };
  }

  async GetProviderReviews(id: string): Promise<Types.GetReviewSetResponse> {
    const route = 'api/reviews/?userId=' + id + '&receivedReviews=true';
    const response: ApiResponse<ReviewSet> = await this.apisauce.get(route);

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return { kind: 'ok', response: response.data };
  }

  async GetProviderTypes(): Promise<Types.GetProviderTypesResponse> {
    const response: ApiResponse<any> = await this.apisauce.get(
      'api/providertypes',
    );

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  }
}
