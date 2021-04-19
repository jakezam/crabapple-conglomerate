/**
 *
 * PrivacySettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Button, Message } from 'semantic-ui-react';

interface Props {}

export const PrivacySettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden"/>
            <label>Enable location while the site is open</label>
          </div>
        </div>

        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden" checked={true}/>
            <label>Allow site cookies</label>
          </div>
        </div>

        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden"/>
            <label>Collect browsing data</label>
          </div>
        </div>

        <div className="field">
          <button className="ui primary basic button" type="submit">
            Clear Browsing History
          </button>
        </div>

        <div className="ui divider" />

        <ButtonInfo>
        {/*<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>*/}
          <button className="negative ui button" type="submit" style={{display: "flex", marginRight: "3em"}}>
            Reset Account
          </button>
            <StyledMessage info>
              <div className="header">Account Reset Notice</div>
              <p>
                Resetting your account removes all data and job requests attached to your account except your username.
              </p>
            </StyledMessage>
        {/*</div>*/}
        </ButtonInfo>
      </form>
    </div>
  );
};

const Div = styled.div``;

const ButtonInfo = styled.div`
  display: flex;
  //justify-content: space-between;
  align-items: center;
  // border: 5px solid green;
`;

const StyledMessage = styled(Message)`
  //border: 5px solid red;
  //display: flex;
  margin-left: 20px;
  //align-self: flex-end;
`;