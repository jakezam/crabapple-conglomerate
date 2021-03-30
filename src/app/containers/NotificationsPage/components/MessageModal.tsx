import React from 'react';
import {Container, Grid, Header, List, Table, Modal, Button} from 'semantic-ui-react';

function MessageModal(props) {
    const [open, setOpen] = React.useState(false)
    const {from, subject, message, messageId} = props;
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>View</Button>}
      >
        <Modal.Header>Message From: {from}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{subject}</Header>
            <p>
              {message}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button color='red' onClick={() => setOpen(false)}>
            Delete
          </Button>
          <Button
            content="Reply"
            labelPosition='right'
            icon='paper plane'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
}
export default MessageModal;