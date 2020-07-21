/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { footerSaga } from './saga';

interface Props {}

export const Footer = memo((props: Props) => {
  useInjectSaga({ key: 'footer', saga: footerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="footer" style={{ textAlign: 'center', height: 150 }}>
        <div className="ui 3 column grid" style={{}}>
          <div className="column" style={{ width: '33%', textAlign: 'left' }}>
            <h1>inployd</h1>A better way to work
          </div>
          <div
            className="column"
            style={{ width: '33%', textAlign: 'left', padding: 'top' }}
          >
            <div className="ui list">
              <div className="item">
                <a href="#">Terms and Conditions</a>
              </div>
            </div>
            <div className="ui list">
              <div className="item">
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
});
