/**
 *
 * AccountSettings
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Message } from 'semantic-ui-react';

interface Props {}

export const AccountSettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <form className="ui form">
          <div className="field">
            <div style={{ textAlign: 'center' }}>
              <h3>General</h3>
            </div>
            <label style={label_style}>Username</label>
            <FieldInfo>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value="jakezam"
                style={field_style}
              />
              <Message info>
                <div className="header">Changing Username</div>
                <p>Your username must be unique.</p>
              </Message>
            </FieldInfo>
          </div>
          <div className="field">
            <label style={label_style}>Email</label>
            <FieldInfo>
              <input
                type="text"
                name="username"
                placeholder="Email"
                value="zamanj@rpi.edu"
                style={field_style}
              />
              <Message info>
                <div className="header">Changing Email</div>
                <p>
                  An email will be sent to the current address to verify the
                  change.
                </p>
              </Message>
            </FieldInfo>
          </div>

          <label style={label_style}>Phone Number</label>
          <div className="inline fields" style={field_style}>
            <div className="field">
              <input type="text" placeholder="(xxx)" />
            </div>
            <div className="field">
              <input type="text" placeholder="xxx" />
            </div>
            <div className="field">
              <input type="text" placeholder="xxxx" />
            </div>
          </div>

          <button className="ui button" type="submit">
            Save above changes
          </button>

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
              style={field_style}
            />
          </div>
          <div className="field">
            <label style={label_style}>New Password</label>
            <input
              type="password"
              name="new_password"
              placeholder="New Password"
              style={field_style}
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

const FieldInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  //border: 5px solid red;
`;

let label_style = {
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  marginTop: '2%',
};

let field_style = {
  maxWidth: '40%',
  marginRight: '10%',
};

let label_section = {
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  marginTop: '2%',
};
const Div = styled.div``;
