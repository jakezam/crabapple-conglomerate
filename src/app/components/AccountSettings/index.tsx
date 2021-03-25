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
            <label
              style={{
                fontFamily:
                  "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
              }}
            >
              Username
            </label>
          </div>
        </form>
      </div>
    </>
  )
};

const Div = styled.div``;
