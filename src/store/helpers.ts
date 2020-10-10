import { put, call, spawn } from 'redux-saga/effects';
import { ErrorLoadingActions } from 'store/types';
import { CaseReducer, Draft, PayloadAction } from '@reduxjs/toolkit';
import { keys, intersection } from 'lodash';

export function withLoading<T extends ErrorLoadingActions>(actions: T, fn) {
  return function* () {
    try {
      yield put(actions.setLoading(true));
      yield fn();
    } catch (e) {
      yield put(actions.setError((e as Error).message));
    } finally {
      yield put(actions.setLoading(false));
    }
  };
}

// source https://redux-toolkit.js.org/usage/usage-with-typescript#building-type-safe-reducer-argument-objects
export function createTypedReducer<TState, T>(
  fn: (draft: Draft<TState>, action: PayloadAction<T>) => void,
): CaseReducer<TState, PayloadAction<T>> {
  return fn;
}

// source https://redux-saga.js.org/docs/advanced/RootSaga.html
export const spawnSaga = saga =>
  spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.error(e);
      }
    }
  });

export const hasKey = <T>(obj: Partial<T>, key: keyof T): boolean =>
  keys(obj).includes(key as string);

export const hasAnyKey = <T>(
  obj: Partial<T>,
  ...keysOfT: Array<keyof T>
): boolean => intersection(keys(obj), keysOfT as string[]).length > 0;
