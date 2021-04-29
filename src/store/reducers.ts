/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';
import { connectRouter, RouterState } from 'connected-react-router';
import { history } from 'utils/history';

import { reducer as discover } from './Discover/slice';
import { reducer as signUp } from './SignUp/slice';
import { reducer as login } from './Login/slice';
import { reducer as viewedUser } from './ViewedUser/slice';
import { reducer as review } from './Review/slice';
import { reducer as jobs } from './Jobs/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
// export function createReducer(injectedReducers: InjectedReducersType = {}) {
//   // Initially we don't have any injectedReducers, so returning identity function to avoid the error
//   if (Object.keys(injectedReducers).length === 0) {
//     return state => state;
//   } else {
//     return combineReducers({
//       signUp,
//       ...injectedReducers,
//       router: connectRouter(history) as Reducer<RouterState, AnyAction>,
//     });
//   }
// }

// Create and add all slices to state, dynamically add injected reducers as well
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducer = combineReducers({
    discover,
    signUp,
    login,
    viewedUser,
    jobs,
    review,
    ...injectedReducers,
    router: connectRouter(history) as Reducer<RouterState, AnyAction>,
  });

  return rootReducer;
}
