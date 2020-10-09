/**
 *
 * Asynchronously loads the component for DiscoverPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DiscoverPage = lazyLoad(
  () => import('./index'),
  module => module.DiscoverPage,
);
