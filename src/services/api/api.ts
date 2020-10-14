/* eslint-disable  @typescript-eslint/no-unused-vars */

import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from './api.problem';
import { ApiConfig, DEFAULT_API_CONFIG } from './api.config';
import * as Types from './api.types';
import { IUser, PostUserCreateRequest } from './api.types';
import * as https from 'https';

const API_PAGE_SIZE = 10;

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
  async PostCreateUser({
    FirstName,
    LastName,
    DateOfBirth,
    Gender,
    State,
  }: PostUserCreateRequest): Promise<Types.PostUserCreateResponse> {
    const response: ApiResponse<any> = await this.apisauce.post('api/users', {
      FirstName: FirstName,
      LastName: LastName,
      DateOfBirth: DateOfBirth,
      Gender: Gender,
      State: State,
    });

    console.log('Logging API Response: ', response);

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    return response.data.results;
  }

  /**
   * Get All Users
   */
  async GetUsers(): Promise<Types.GetUsersResponse> {
    const response: ApiResponse<any> = await this.apisauce.get('api/users');

    console.log('Logging API Response: ', response);

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    console.log('Logging API Data: ', response.data.results);

    return response.data.results;
  }
}
