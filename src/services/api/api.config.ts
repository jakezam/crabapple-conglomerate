import { REACT_APP_API_BASE_URL } from '../../utils/env.config';

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

declare var process: any;

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: REACT_APP_API_BASE_URL as string, // Not a good solution, fix in future
  timeout: 10000,
};
