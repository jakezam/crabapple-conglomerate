/**
 *
 * Asynchronously loads the component for SellerProfilePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SellerProfilePage = lazyLoad(
  () => import('./index'),
  module => module.SellerProfilePage,
);
