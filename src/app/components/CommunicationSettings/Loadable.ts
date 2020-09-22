/**
 *
 * Asynchronously loads the component for CommunicationSettings
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CommunicationSettings = lazyLoad(
  () => import('./index'),
  module => module.CommunicationSettings,
);
