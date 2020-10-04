/**
 *
 * Signup
 *
 */
import React from 'react';

export function Signup() {
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
