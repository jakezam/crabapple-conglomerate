/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button, Form, Modal, Select, TextArea } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectViewedUserId } from 'store/ViewedUser/selectors';
import { selectUserData } from 'store/SignUp/selectors';
import { PostConsultationRequestCreateRequest } from 'services/api';
import { env } from 'store/environment';

export function JobRequestForm() {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState('');
  const [time, setTime] = React.useState('');
  const [message, setMessage] = React.useState('');
  const sendToUserId = useSelector(selectViewedUserId);
  const fromUserId = useSelector(selectUserData).userId;
  const handleDayChange = (e, { name, value }) => setDay(value);
  const handleTimeChange = (e, { name, value }) => setTime(value);
  const handleMessageChange = (e, { name, value }) => setMessage(value);
  const handleSubmit = async () => {
    let body: PostConsultationRequestCreateRequest = {
      To: sendToUserId,
      From: sendToUserId,
      Day: day,
      Time: time,
      Message: message,
    };

    console.log(body);

    let res = await env.api.PostCreateConsultationRequest(body);

    console.log('Response: ' + res.response);
  };
  let days: Array<{ key: string; text: string; value: string }> = [
    {
      key: '1',
      text: 'Monday',
      value: 'Monday',
    },
    {
      key: '2',
      text: 'Tuesday',
      value: 'Tuesday',
    },
    {
      key: '3',
      text: 'Wednesday',
      value: 'Wednesday',
    },
    {
      key: '4',
      text: 'Thursday',
      value: 'Thursday',
    },
    {
      key: '5',
      text: 'Friday',
      value: 'Friday',
    },
    {
      key: '6',
      text: 'Saturday',
      value: 'Saturday',
    },
    {
      key: '7',
      text: 'Sunday',
      value: 'Sunday',
    },
  ];

  let times: Array<{ key: string; text: string; value: string }> = [];
  let key = 1;
  for (let i = 6; i < 12; i++) {
    let timeString1 = i.toString() + ':' + '00 AM';
    let timeString2 = i.toString() + ':' + '30 AM';
    times.push({
      key: key.toString(),
      text: timeString1,
      value: timeString1,
    });
    key++;
    times.push({
      key: key.toString(),
      text: timeString2,
      value: timeString2,
    });
    key++;
  }
  times.push({
    key: key.toString(),
    text: '12:00 PM',
    value: '12:00 PM',
  });
  key++;
  times.push({
    key: key.toString(),
    text: '12:30 PM',
    value: '12:30 PM',
  });
  key++;
  for (let i = 1; i <= 6; i++) {
    let timeString1 = i.toString() + ':' + '00 PM';
    let timeString2 = i.toString() + ':' + '30 PM';
    times.push({
      key: key.toString(),
      text: timeString1,
      value: timeString1,
    });
    key++;
    times.push({
      key: key.toString(),
      text: timeString2,
      value: timeString2,
    });
    key++;
  }

  let btnTrigger = (
    <Button
      primary
      style={{ marginTop: '20px', padding: '12px', width: '145px' }}
    >
      Send Job Request
    </Button>
  );
  let content = (
    <Form onSubmit={handleSubmit}>
      {/*<Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
      </Form.Group>*/}
      <Form.Field
        required={true}
        control={TextArea}
        label="Message"
        onChange={handleMessageChange}
        placeholder="Briefly describe the job you're planning..."
      />
      <Form.Field
        required={true}
        control={Select}
        label="Day"
        options={days}
        onChange={handleDayChange}
        placeholder="Select Preferred Day"
      />
      <Form.Field
        required={true}
        control={Select}
        label="Time"
        options={times}
        onChange={handleTimeChange}
        placeholder="Select Preferred Time"
      />

      <Form.Button
        style={{ align: 'right' }}
        content="Send"
        labelPosition="right"
        icon="send"
        positive
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
        <Modal.Header>Request Job Consultation</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Body>
  );
}

const Body = styled.div``;
