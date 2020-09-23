/**
 *
 * Asynchronously loads the component for SuggestedUser
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SuggestedUser = lazyLoad(
  () => import('./index'),
  module => module.SuggestedUser,
);
