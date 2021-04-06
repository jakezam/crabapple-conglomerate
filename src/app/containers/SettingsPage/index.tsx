/**
 *
 * SettingsPage
 *
 */
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { AccountSettings } from 'app/components/AccountSettings/Loadable';
import { PrivacySettings } from 'app/components/PrivacySettings/Loadable';
import { NavigationBar } from 'app/components/NavigationBar';
import { CommunicationSettings } from 'app/components/CommunicationSettings/Loadable';
import './Settings.scss';

export function SettingsPage() {
  const panes: any = [
    {
      menuItem: 'AccountSettingsTab',
      render: component => (
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
      <NavigationBar />
      <h2
        className="ui center aligned icon header"
        style={{ boxShadow: 'none', paddingBottom: '120px' }}
      >
        <i className="settings icon" />
        <div className="content">
          Profile Settings
          <div className="sub-header">
            {"Manage your profile's preferences and settings"}
          </div>
        </div>
      </h2>
      <div style={{display:"flex", justifyContent: "center"}}>
        <Tab className="settings-tabs" panes={panes} style={tab_style}/>
      </div>
    </>
  );
}

let tab_style = {
  width: "100em"
}
