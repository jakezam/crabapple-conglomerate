import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import ReplyModal from './ReplyModal';

function MessageModal(props) {
  const [open, setOpen] = React.useState(false);
  const { from, subject, message, messageId, firstColumn, fromId, toId, isInbox } = props;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>View</Button>}
    >
      <Modal.Header>
        Message {firstColumn}: {from}
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>{subject}</Header>
          <p>{message}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button color="red" onClick={() => setOpen(false)}>
          Delete
        </Button>
        {isInbox ? <ReplyModal to={from} fromId={toId} subject={'Re: ' + subject} toId={fromId} /> : <div></div>}
        
      </Modal.Actions>
    </Modal>
  );
}

export default MessageModal;
