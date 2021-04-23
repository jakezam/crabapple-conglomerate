/* This is the middleman for reaching out to the .env files, It establishes
default values in the situation when the .env file contains no value for key */
export const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
}

export const mobileMediaParameters = { query: '(max-width: 750px)' };
export const smallerDesktopMediaParameters = { query: '(max-width: 820px)' };
export const jobPageShrink = { query: '(max-width: 1300px)' };
export const MaxWidth = 2000;
