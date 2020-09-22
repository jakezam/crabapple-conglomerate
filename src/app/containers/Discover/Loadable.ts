/**
 *
 * Asynchronously loads the component for Discover
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Discover = lazyLoad(
  () => import('./index'),
  module => module.Discover,
);
