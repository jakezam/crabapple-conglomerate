/**
 *
 * NotificationsPage
 *
 */

import React, { useState } from 'react';
import { NavigationBar } from '../../components/NavigationBar';
import { Container, Header, Tab } from 'semantic-ui-react';
import MessagesTable from './components/MessagesTable';
import { env } from 'store/environment';
import { IMessage, IMessageRead } from 'services/api/api.types';

export function NotificationsPage() {
  //let messages = useSelector(selectUserMessages)
  const [loading, setLoading] = useState(true);
  let messages : Array<IMessageRead> | undefined;

  let sent : Array<IMessageRead> | undefined;
  env.api.GetInbox("27c27d08-8988-4734-ccab-08d908d5d085").then(
    value => {
      if (value.kind === 'ok') {
        messages = value.response
      }
      setLoading(false);
    }
  );
  
  env.api.GetSent("27c27d08-8988-4734-ccab-08d908d5d085").then(
    value => {
      if (value.kind === 'ok') {
        sent = value.response
      }
    }
  );
  


  const panes = [
    {
      menuItem: 'Inbox',
      render: () => (
        <Tab.Pane attached={false}>
          <MessagesTable messages={messages} firstColumn="From" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Sent',
      render: () => (
        <Tab.Pane attached={false}>
          <MessagesTable messages={sent} firstColumn="To" />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      <NavigationBar />
      <Container
        style={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          width: '50%',
          alignSelf: 'center',
          marginTop: '50px',
        }}
      >
        <Header>Messages</Header>
        {!loading ? <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> : "Loading..."}
        
      </Container>
    </div>
  );
}
