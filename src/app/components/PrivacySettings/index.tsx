/**
 *
 * PrivacySettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Message } from 'semantic-ui-react';

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

        <Message info>
          <div className="header">Personal Information</div>
          <p>Includes first name, last name, and phone number. Only your username will be displayed. Messages can only be sent directly through Inployd.</p>
        </Message>

      </form>
    </div>
  );
};

const Div = styled.div``;
