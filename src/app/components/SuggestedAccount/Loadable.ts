/**
 *
 * Asynchronously loads the component for SuggestedAccount
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SuggestedAccount = lazyLoad(
  () => import('./index'),
  module => module.SuggestedAccount,
);
