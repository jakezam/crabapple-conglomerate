/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import { TimePicker } from './TimePicker';

export function ModificationForm(props) {
  const [open, setOpen] = React.useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const { job } = props;

  let btnTrigger = (
    <Button primary size="small">
      MODIFY JOB
    </Button>
  );

  let content = (
    <Form>
      <Form.Input fluid label="Working with:" value={job.username} disabled />
      <Form.Input fluid label="Working on:" value={job.jobTitle} />
      {/*<Form.Input label="Date" value={job.beginDate} />*/}
      <Form.Button
        label={'Selected Dates:'}
        onClick={() => {
          setCalendarVisible(true);
        }}
      >
        Open Calender
      </Form.Button>
      <Form.Input label="Email Address:" value={job.emailAddress} disabled />
      <Form.Input label="Phone Number:" value={job.phoneNumber} disabled />
      <Form.Field
        control={TextArea}
        label="Description:"
        value={job.jobDescription}
      />
    </Form>
  );

  return (
    <Body>
      <Modal
        dimmer={'blurring'}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={btnTrigger}
      >
        <Modal.Header>Modify Job</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
          <Button
            content="Cancel"
            labelPosition="right"
            icon="x"
            negative={true}
            onClick={() => {
              setOpen(false);
            }}
          />
          <Button
            content="Send Modifications"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>

      <Modal
        dimmer={'blurring'}
        open={calendarVisible}
        onClose={() => {
          setCalendarVisible(false);
        }}
      >
        <CalendarContainer>
          <TimePicker setModalOpen={setCalendarVisible} />
        </CalendarContainer>
      </Modal>
    </Body>
  );
}

const Body = styled.div``;

const CalendarContainer = styled.div`
  padding: 2em;
  display: flex;
  flex: 1;
  flex-direction: column;

  // DEBUG STYLES //
  //border: 5px solid red;
`;
