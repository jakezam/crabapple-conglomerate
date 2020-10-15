import { Form } from 'formsy-semantic-ui-react';
import React from 'react';

export function step2() {
  return <Form hidden={signUpStep !== 2}></Form>;
}
