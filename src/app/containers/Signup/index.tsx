/**
 *
 * Signup
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import css from 'Signup.scss';
import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectSignup } from './selectors';
import { Button, Checkbox, Form } from 'semantic-ui-react';
interface Props {}

export function Signup(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signup = useSelector(selectSignup);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
                Email Address
              </label>
              <input placeholder="example@gmail.com" />
            </div>
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
            <div className="field">
              <label
                style={{
                  fontFamily:
                    "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                }}
              >
                Confirm Password
              </label>
              <input></input>
            </div>
            <button className="medium fluid positive ui button">
              Create Account
            </button>
          </form>
          <div
            className="ui horizontal divider"
            style={{ textTransform: 'lowercase' }}
          >
            Already have an account?
          </div>
          <button className="ui fluid primary button">Sign in</button>
        </div>
      </div>
    </>
  );
}

const Div = styled.div``;