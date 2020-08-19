/**
 *
 * Settings
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectSettings } from './selectors';
import { settingsSaga } from './saga';

import { Tab } from 'semantic-ui-react';

import { AccountSettings } from 'app/components/AccountSettings/Loadable';
import { PrivacySettings } from 'app/components/PrivacySettings/Loadable';
import { CommunicationSettings } from 'app/components/CommunicationSettings/Loadable';
interface Props {}

export function Settings(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: settingsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = useSelector(selectSettings);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const panes = [
    {
      menuItem: 'AccountSettingsTab',
      render: () => (
        <Tab.Pane>
          <AccountSettings />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'CommunicationSettingsTab',
      render: () => (
        <Tab.Pane>
          <CommunicationSettings />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'PrivacySettingsTab',
      render: () => (
        <Tab.Pane>
          <PrivacySettings />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <h2
        className="ui center aligned icon header"
        style={{ boxShadow: 'none', paddingBottom: '120px' }}
      >
        <i className="settings icon"></i>
        <div className="content">
          Profile Settings
          <div className="sub header">
            Manage your profile's preferences and settings
          </div>
        </div>
      </h2>
      {/* <div className="ui top attached tabular menu">
        <div className="active item">Tab 1</div>
        <div className="item">Tab 2</div>
      </div> */}
      <Tab panes={panes}></Tab>
    </>
  );
}

const Div = styled.div``;
