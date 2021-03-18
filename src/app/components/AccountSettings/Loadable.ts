/**
 *
 * Asynchronously loads the component for AccountSettings
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AccountSettings = lazyLoad(
  () => import('./index'),
  module => module.AccountSettings,
);
