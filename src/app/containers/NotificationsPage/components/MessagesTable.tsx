import React from 'react';
import { Table } from 'semantic-ui-react';
import { IMessageRead } from 'services/api';
import MessageModal from './MessageModal';
export interface IProps {
  messages: Array<IMessageRead> | undefined;
  firstColumn: string;
}
function MessagesTable(props: IProps) {
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
      {messages !== undefined ? messages.map(el => {
        return (
          <Table.Row key={el.messageId}>
            <Table.Cell>
              {firstColumn === 'From' ? el.fromName : el.toName}
            </Table.Cell>
            <Table.Cell>{el.subject}</Table.Cell>
            <Table.Cell>
              <MessageModal
                messageId={el.messageId}
                subject={el.subject}
                message={el.message}
                firstColumn={firstColumn}
                from={el.fromName}
                fromId={el.from}
                toId={el.to}
                isInbox={firstColumn === 'From' ? true : false}
                to={el.toName}
              />
            </Table.Cell>
          </Table.Row>
        );
      }) : ""}
    </Table>
  );
}

export default MessagesTable;
