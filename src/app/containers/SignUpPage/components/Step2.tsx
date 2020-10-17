import { Form } from 'formsy-semantic-ui-react';
import React from 'react';

const errorLabel = <Label color="red" pointing />;

export function Step2() {
  return <Form hidden={signUpStep !== 2}></Form>;
}
