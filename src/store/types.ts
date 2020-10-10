// Package Imports //
import { CaseReducerActions } from '@reduxjs/toolkit';

// State Imports //
import { SignUpState } from './SignUp/types';

// Type Exports //
export type ILoading = { loading: boolean };
export type IError = { error?: string };
export type IErrorLoading = ILoading & IError;

export type ErrorLoadingActions = CaseReducerActions<{
  setLoading(state: ILoading, action: { payload: boolean; type: string }): void;
  setError(state: IError, action: { payload: string; type: string }): void;
}>;

export interface KeyedById<T> {
  [id: string]: T;
}

// source: https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
export type SubType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  }[keyof Base]
>;
export type NullableString = string | null | undefined;

export interface RootState {
  // State Assignment
  signUp: SignUpState;
}
