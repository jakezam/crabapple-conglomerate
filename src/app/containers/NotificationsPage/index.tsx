/**
 *
 * NotificationsPage
 *
 */

import React from 'react';
import { NavigationBar } from '../../components/NavigationBar';
import {Container, Grid, Header, List, Table} from 'semantic-ui-react';
export function NotificationsPage() {
  let messages = [
    {
      messageId: 0,
      subject: "Test Subject",
      message: "This is a test private message",
      firstName: "Joe",
      lastName: "Test"
    },
    {
      messageId: 1,
      subject: "Test Subject 2",
      message: "This is another test private message",
      firstName: "Spongebob",
      lastName: "Squarepants"
    },
  ];
  return (
    <div>
      <NavigationBar />
      <Container style={{display: 'flex', flex:'1', flexDirection: 'column', width: '50%', alignSelf: 'center', marginTop: '20%'}}>
              <Header>Messages</Header>
              <Table celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>From</Table.HeaderCell>
                  <Table.HeaderCell>Subject</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
                {messages.map(el => {
                  return (
                    <Table.Row  key={el.messageId}>
                      <Table.Cell>
                        {el.firstName} {el.lastName}
                      </Table.Cell>
                      <Table.Cell>{el.subject}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table>
      </Container>
    </div>
  );
}
