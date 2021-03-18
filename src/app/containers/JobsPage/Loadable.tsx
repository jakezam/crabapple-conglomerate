/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const JobsPage = lazyLoad(
  () => import('./index'),
  module => module.JobsPage,
);
