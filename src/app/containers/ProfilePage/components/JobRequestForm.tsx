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
import {
  selectViewedUser,
  selectViewedUserId,
} from 'store/ViewedUser/selectors';
import {
  selectPossibleSubCategories,
  selectUserData,
  selectUserId,
} from 'store/SignUp/selectors';
import { Api, PostConsultationRequestCreateRequest } from 'services/api';
import { env } from 'store/environment';

export function JobRequestForm() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [message, setMessage] = React.useState('');
  const sendToUserId = useSelector(selectViewedUserId);
  const fromUserId = useSelector(selectUserData).userId;
  const providerCategories = useSelector(selectViewedUser).providerInfo
    .subcategories;
  const handleCategoryChange = (e, { name, value }) => setCategory(value);
  const handleMessageChange = (e, { name, value }) => setMessage(value);
  const handleSubmit = async () => {
    let body: PostConsultationRequestCreateRequest = {
      To: sendToUserId,
      From: sendToUserId,
      ProviderCategory: category,
      Message: message,
    };

    console.log(body);

    let res = await env.api.PostCreateConsultationRequest(body);

    console.log('Response: ' + res.response);
  };
  let options: Array<{ key: string; text: string; value: string }> = [];
  // for (let i = 0; i < providerCategories.length; i++) {
  //   let entry = {
  //     key: i.toString(),
  //     text: providerCategories[i],
  //     value: providerCategories[i],
  //   };
  //   options.push(entry);
  // }
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
        control={Select}
        label="Category"
        options={options}
        onChange={handleCategoryChange}
        placeholder="Select Category"
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
        <Modal.Header>Build Request</Modal.Header>
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
