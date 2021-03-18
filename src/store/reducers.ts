/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';
import { connectRouter, RouterState } from 'connected-react-router';
import { history } from 'utils/history';

import { reducer as discover } from './Discover/slice';
import { reducer as signUp } from './SignUp/slice';
import { reducer as viewedUser } from './ViewedUser/slice';
import { reducer as review } from './Review/slice';
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

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducer = combineReducers({
    discover,
    signUp,
    viewedUser,
    review,
    ...injectedReducers,
    router: connectRouter(history) as Reducer<RouterState, AnyAction>,
  });

  return rootReducer;
}
