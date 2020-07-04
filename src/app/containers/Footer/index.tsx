/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

import { useInjectSaga } from 'utils/redux-injectors';
import { footerSaga } from './saga';

interface Props {}

export const Footer = memo((props: Props) => {
  useInjectSaga({ key: 'footer', saga: footerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="footer" style={{ textAlign: 'center' }}>
        <div className="ui text container" style={{}}>
          I am a footer
        </div>
      </div>
    </>
  );
});
