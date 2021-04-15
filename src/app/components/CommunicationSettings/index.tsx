/**
 *
 * CommunicationSettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Message } from 'semantic-ui-react';

interface Props {}

export const CommunicationSettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden" />
            <label>Enable email alerts from Providers</label>
          </div>
        </div>

        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden" />
            <label>Enable text message alerts from Providers</label>
          </div>
        </div>

        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" className="hidden" />
            <label>Hide personal information from Providers </label>
          </div>
        </div>

        <Message info>
          <div className="header">Personal Information</div>
          <p>
            Includes first name, last name, and phone number. Only your username
            will be displayed. Messages can only be sent directly through
            Inployd.
          </p>
        </Message>
      </form>
    </div>
  );
};

const Div = styled.div``;
