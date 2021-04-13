/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Form, Modal, Select, TextArea } from 'semantic-ui-react';
import content from '*.scss';
import { useSelector } from 'react-redux';
import { selectViewedUserId } from 'store/ViewedUser/selectors';

export function JobRequestForm() {
  const [open, setOpen] = React.useState(false);
  const sendToUserId = useSelector(selectViewedUserId);
  let btnTrigger = (
    <Button
      primary
      style={{ marginTop: '20px', padding: '12px', width: '145px' }}
    >
      Send Job Request
    </Button>
  );


  const options = [
    { key: '1', text: 'Job1', value: 'job1' },
    { key: '2', text: 'Job2', value: 'job2' },
    { key: '3', text: 'Job3', value: 'job3' },
  ]
  let content = (
    <Form>
      {/*<Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
      </Form.Group>*/}
      <Form.Field
        required={true}
        control={TextArea}
        label="Message"
        placeholder="Briefly describe the job you're planning..."
      />
      <Form.Field
            control={Select}
            label='Category'
            options={options}
            placeholder='Select Category'
      />

      
      {/*<Form.Input label="Email" placeholder="joe@schmoe.com" />
      <Form.Field width="4">
        <label>Phone Number</label>
        <input placeholder="(XXX)-XXX-XXXX" />
  </Form.Field>*/}
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
