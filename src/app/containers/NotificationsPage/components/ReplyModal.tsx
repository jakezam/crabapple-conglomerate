import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input, Modal, TextArea } from 'semantic-ui-react';
import { IMessage } from 'services/api';
import { env } from 'store/environment';
import { selectUserData } from 'store/SignUp/selectors';
import { selectViewedUserId } from 'store/ViewedUser/selectors';

function ReplyModal(props) {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const { toId, fromId, to, subject } = props;
  const [message, setMessage] = React.useState('');
  const [sub, setSub] = React.useState(subject);
  const handleSubChange = (e, { name, value }) => setSub(value);
  const handleMessageChange = (e, { name, value }) => setMessage(value);
  const handleSubmit = async () => {
    let body: IMessage = {
      to: toId,
      from: fromId,
      subject: sub,
      message: message,
    };
    env.api.PostMessage(body);
    setOpens(true);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      style={{ width: '50%' }}
      open={open}
      trigger={
        <Button
          content="Reply"
          labelPosition="right"
          icon="paper plane"
          positive
        />
      }
    >
      <Modal.Header>Reply to: {to}</Modal.Header>
      <Modal.Content image>
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Form.Field
            required={true}
            control={Input}
            label="Subject"
            onChange={handleSubChange}
            defaultValue={subject}
            placeholder={subject}
          />
          <Form.Field
            required={true}
            control={TextArea}
            label="Message"
            onChange={handleMessageChange}
            placeholder="Message"
          />

          <Form.Button
            style={{ align: 'right' }}
            content="Send"
            labelPosition="right"
            icon="send"
            positive
          />

          {
            <Modal
              onClose={() => setOpens(false)}
              onOpen={() => setOpens(true)}
              open={opens}
            >
              <Modal.Header>Reply sent.</Modal.Header>

              <Modal.Actions>
                <Button
                  color="black"
                  onClick={() => {
                    setOpens(false);
                    setOpen(false);
                  }}
                >
                  Okay
                </Button>
              </Modal.Actions>
            </Modal>
          }
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ReplyModal;
