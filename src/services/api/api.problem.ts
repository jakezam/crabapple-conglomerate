import { ApiResponse } from 'apisauce';

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: 'timeout'; temporary: true; response: null }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: 'cannot-connect'; temporary: true; response: null }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: 'server'; response: null }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: 'unauthorized'; response: null }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: 'forbidden'; response: null }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: 'not-found'; response: null }
  /**
   * All other 4xx series errors.
   */
  | { kind: 'rejected'; response: null }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: 'unknown'; temporary: true; response: null }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: 'bad-data'; response: null };

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  response: ApiResponse<any>,
): GeneralApiProblem | null {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return { kind: 'cannot-connect', temporary: true, response: null };
    case 'NETWORK_ERROR':
      return { kind: 'cannot-connect', temporary: true, response: null };
    case 'TIMEOUT_ERROR':
      return { kind: 'timeout', temporary: true, response: null };
    case 'SERVER_ERROR':
      return { kind: 'server', response: null };
    case 'UNKNOWN_ERROR':
      return { kind: 'unknown', temporary: true, response: null };
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return { kind: 'unauthorized', response: null };
        case 403:
          return { kind: 'forbidden', response: null };
        case 404:
          return { kind: 'not-found', response: null };
        default:
          return { kind: 'rejected', response: null };
      }
    case 'CANCEL_ERROR':
      return null;
  }

  return null;
}
