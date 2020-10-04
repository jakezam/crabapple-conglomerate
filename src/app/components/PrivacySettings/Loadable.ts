/**
 *
 * Asynchronously loads the component for PrivacySettings
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PrivacySettings = lazyLoad(
  () => import('./index'),
  module => module.PrivacySettings,
);
