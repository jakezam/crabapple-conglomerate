import React from 'react';
import { Container, Grid, Header, List, Table } from 'semantic-ui-react';
import MessageModal from './MessageModal';

function MessagesTable(props) {
  const { messages, firstColumn } = props;
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{firstColumn}</Table.HeaderCell>
          <Table.HeaderCell>Subject</Table.HeaderCell>
          <Table.HeaderCell>View Message</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {messages.map(el => {
        return (
          <Table.Row key={el.messageId}>
            <Table.Cell>
              {el.firstName} {el.lastName}
            </Table.Cell>
            <Table.Cell>{el.subject}</Table.Cell>
            <Table.Cell>
              <MessageModal
                messageId={el.messageId}
                subject={el.subject}
                message={el.message}
                firstColumn={firstColumn}
                from={el.firstName + ' ' + el.lastName}
              />
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table>
  );
}
export default MessagesTable;
