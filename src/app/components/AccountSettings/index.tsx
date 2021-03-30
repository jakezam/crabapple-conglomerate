/**
 *
 * AccountSettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Form } from 'semantic-ui-react';

interface Props {}

export const AccountSettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <form className="ui form">
          <div className="field">
            <label style={label_style}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value="jakezam"
            />
          </div>
          <div className="field">
            <label style={label_style}>Email</label>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value="zamanj@rpi.edu"
            />
          </div>
          <div className="ui divider" />
          <div style={{ textAlign: 'center' }}>
            <h3>Reset Password</h3>
          </div>
          <div className="field">
            <label style={label_style}>Old Password</label>
            <input
              type="password"
              name="old_password"
              placeholder="Old Password"
            />
          </div>
          <div className="field">
            <label style={label_style}>New Password</label>
            <input
              type="password"
              name="new_password"
              placeholder="New Password"
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

let label_style = {
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  marginTop: '2%',
};

let label_section = {
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  marginTop: '2%',
};
const Div = styled.div``;
