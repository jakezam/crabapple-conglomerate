import { Message } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';
import React from 'react';

const errorLabel = <Label color="red" pointing />;

export function Step1() {
  return (
    <Form hidden={signUpStep !== 1}>
      <Message>
        <Message.Header style={{ display: 'flex', justifyContent: 'center' }}>
          Would you like to be a provider?
        </Message.Header>
        <p>
          Becoming a provider allows you to use inployd as a platform to grow
          your business, or just make some money on the side! Dont feel rushed,
          you can decide later on down the line in your settings page.
        </p>
      </Message>
      <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Button primary onClick={onBackStep1} content="No Thanks" />
        <Form.Button primary onClick={onSubmitStep1} content="Yes!" />
      </Form.Group>
    </Form>
  );
}
