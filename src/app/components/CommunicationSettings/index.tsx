/**
 *
 * CommunicationSettings
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export const CommunicationSettings = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" className="hidden"/>
            <label>Enable email alerts from Providers</label>
          </div>
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" className="hidden"/>
            <label>Hide personal information from Providers </label>
          </div>
        </div>

      </form>
    </div>
  );
};

const Div = styled.div``;
