/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import content from '*.scss';

export function JobRequestForm() {
  const [open, setOpen] = React.useState(false);

  let btnTrigger = (
    <Button
      primary
      style={{ marginTop: '20px', padding: '12px', width: '145px' }}
    >
      Send Job Request
    </Button>
  );

  let content = (
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Description"
        placeholder="Briefly describe the job you're planning..."
      />
      <Form.Input label="Email" placeholder="joe@schmoe.com" />
      <Form.Field width="4">
        <label>Phone Number</label>
        <input placeholder="(XXX)-XXX-XXXX" />
      </Form.Field>
    </Form>
  );

  return (
    <Body>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={btnTrigger}
      >
        <Modal.Header>Build Request</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Send"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Body>
  );
}

const Body = styled.div``;
