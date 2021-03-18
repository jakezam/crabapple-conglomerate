import { Message } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStep } from '../../../../store/SignUp/selectors';
import { actions } from '../../../../store/SignUp/slice';
import { push } from 'connected-react-router';

export function Step1() {
  // Hooks //
  const dispatch = useDispatch();
  const signUpStep = useSelector(selectStep);
  ///////////

  const onYes = () => {
    console.log('== Firing Step One! "OnYes" ==');
    dispatch(actions.incrementStep());
  };

  const onNoThanks = () => {
    console.log('== Firing Step One! "NoThanks" ==');
    dispatch(push('/home'));
  };

  return (
    <Form style={{ width: '30vw' }} hidden={signUpStep !== 1}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Almost There!
      </h1>
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
      <Form.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}
      >
        <Form.Button primary onClick={onNoThanks} content="No Thanks" />
        <Form.Button primary onClick={onYes} content="Yes!" />
      </Form.Group>
    </Form>
  );
}
