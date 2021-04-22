/**
 *
 * NotificationsPage
 *
 */

import React from 'react';
import { NavigationBar } from '../../components/NavigationBar';
import { Container, Grid, Header, List, Tab, Table } from 'semantic-ui-react';
import MessagesTable from './components/MessagesTable';
import { useSelector } from 'react-redux';
export function NotificationsPage() {
  //let messages = useSelector(selectUserMessages)
  let messages = [
    {
      messageId: 0,
      subject: 'Test Subject',
      message: 'This is a test private message',
      firstName: 'Joe',
      lastName: 'Test',
    },
    {
      messageId: 1,
      subject: 'Test Subject 2',
      message: 'This is another test private message',
      firstName: 'Spongebob',
      lastName: 'Squarepants',
    },
  ];
  let sent = [
    {
      messageId: 0,
      subject: 'Test Sent Subject',
      message: 'This is a test private message that you sent',
      firstName: 'Steve-o',
      lastName: 'Test-o',
    },
    {
      messageId: 1,
      subject: 'Test Sent Subject 2',
      message: 'This is another test private message that you have sent',
      firstName: 'Patrick',
      lastName: 'Star',
    },
  ];
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
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    </div>
  );
}
