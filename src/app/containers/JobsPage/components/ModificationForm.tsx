/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';

export function ModificationForm(props) {
  const [open, setOpen] = React.useState(false);
  const { job } = props;

  let btnTrigger = (
    <Button primary size="small">
      MODIFY JOB
    </Button>
  );

  let content = (
    <Form>
      <Form.Input fluid label="Working with" value={job.username} disabled />
      <Form.Input fluid label="Working on" value={job.jobTitle} />
      <Form.Input label="Date" value={job.beginDate} />
      <Form.Input label="Email Address" value={job.emailAddress} disabled />
      <Form.Input label="Phone Number" value={job.phoneNumber} disabled />
      <Form.Field
        control={TextArea}
        label="Description"
        value={job.jobDescription}
      />
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
        <Modal.Header>Modify Job</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Send Modifications"
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
