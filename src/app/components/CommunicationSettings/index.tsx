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

          </div>
        </div>
      </form>
    </div>
  );
};

const Div = styled.div``;
