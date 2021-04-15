/**
 *
 * Asynchronously loads the component for DiscoverPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SearchResultPage = lazyLoad(
  () => import('./index'),
  module => module.SearchResultsPage,
);
