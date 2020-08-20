/**
 *
 * SignInPage
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectSignInPage } from './selectors';
import { signInPageSaga } from './saga';

import './SignInPage.scss';

interface Props {}

export function SignInPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: signInPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signInPage = useSelector(selectSignInPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <div className="ui centered container" style={{ width: '30%' }}>
        <div
          className="ui fluid centered card"
          style={{
            padding: 50,
            marginTop: 50,
            fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
          }}
        >
          <form className="ui form">
            <div className="field">
              <label
                style={{
                  fontFamily:
                    "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                }}
              >
                Username
              </label>
              <input placeholder="Teetle" />
            </div>
            <div className="field">
              <label
                style={{
                  fontFamily:
                    "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                }}
              >
                Password
              </label>
              <input></input>
            </div>
            <button className="ui fluid primary button signin-button">
              Sign in
            </button>
          </form>
          <div
            className="ui horizontal divider"
            style={{ textTransform: 'lowercase' }}
          >
            Don't have an account?
          </div>
          <button className="medium fluid positive ui button createAccount-button">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
