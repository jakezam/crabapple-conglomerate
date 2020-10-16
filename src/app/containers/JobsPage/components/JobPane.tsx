import React from 'react';
import styled from 'styled-components/macro';
import { Grid, Message } from 'semantic-ui-react';

export function JobPane(props) {
  const { job, isProvider } = props;

  return (
    <Body>
      <InfoBody>
        <h3>Job Information</h3>
      </InfoBody>
      <MessagingBody>
        <MessageHeader>Messages</MessageHeader>
        <Message warning>
          <Message.Header>Change coming soon</Message.Header>
          <p>
            Unfortunately in-app messaging has not been implemented, but our
            developers are hard at work and we hope to have this feature done
            ASAP!
          </p>
        </Message>
      </MessagingBody>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InfoBody = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  border-right: 1px solid #d7d7d7;
`;

const MessagingBody = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px 50px;
`;

const MessageHeader = styled.h3`
  margin-bottom: 50px;
`;
