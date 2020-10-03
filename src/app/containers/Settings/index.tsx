/**
 *
 * Settings
 *
 */
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { AccountSettings } from 'app/components/AccountSettings/Loadable';
import { PrivacySettings } from 'app/components/PrivacySettings/Loadable';
import { CommunicationSettings } from 'app/components/CommunicationSettings/Loadable';
import './Settings.scss';

export function Settings() {
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
          <div className="sub-header">
            Manage your profile's preferences and settings
          </div>
        </div>
      </h2>
      {/* <div className="ui top attached tabular menu">
        <div className="active item">Tab 1</div>
        <div className="item">Tab 2</div>
      </div> */}
      <Tab className="settings-tabs" panes={panes}></Tab>
    </>
  );
}
