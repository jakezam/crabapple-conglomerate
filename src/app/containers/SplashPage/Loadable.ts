/**
 *
 * Asynchronously loads the component for SplashPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SplashPage = lazyLoad(
  () => import('./index'),
  module => module.SplashPage,
);
