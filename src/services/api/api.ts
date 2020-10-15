/* eslint-disable  @typescript-eslint/no-unused-vars */

import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from './api.problem';
import { ApiConfig, DEFAULT_API_CONFIG } from './api.config';
import * as Types from './api.types';
import { IUser, PostUserCreateRequest } from './api.types';
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
    const response: ApiResponse<any> = await this.apisauce.post('api/users', {
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

    return response.data;
  }

  /**
   * Get All Users
   */
  async GetUsers(): Promise<Types.GetUsersResponse> {
    const response: ApiResponse<any> = await this.apisauce.get('api/users');

    // TEMP DEBUG //
    console.log('== Logging API Response: ', await response, ' ==');

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data;
  }
}
