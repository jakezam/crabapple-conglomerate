/**
 *
 * AccountSettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Form } from 'semantic-ui-react'

interface Props {}

export const AccountSettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <form className="ui form">
          <div className="field">
            <label style={label_style}>
              Username
            </label>
            <input type="text" name="username" placeholder="Username" value="jakezam">
            </input>
            <label style={label_style}>
              Email
            </label>
            <input type="text" name="username" placeholder="Email" value="zamanj@rpi.edu">
            </input>
            <div className="ui divider"/>
            <label style={label_style}>
              Old Password
            </label>
            <input type="password" name="password" placeholder="New Password">
            </input>
          </div>
        </form>
      </div>
    </>
  )
};

let label_style = {
  fontFamily:
    "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  marginTop: "2%"
}
const Div = styled.div``;
