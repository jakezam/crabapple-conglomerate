// Gotta be a better way to do this!
export const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
}

export const mobileMediaParameters = { query: '(max-width: 750px)' };
export const smallerDesktopMediaParameters = { query: '(max-width: 820px)' };
