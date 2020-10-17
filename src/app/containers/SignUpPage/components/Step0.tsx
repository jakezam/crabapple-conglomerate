import { Form } from 'formsy-semantic-ui-react';
import React from 'react';
import { Label } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

const errorLabel = <Label color="red" pointing />;
type FormInputs = {
  emailAddress: string;
  password: string;
  confirmPass: string;
};

export function Step0() {
  const { handleSubmit } = useForm<FormInputs>();

  return (
    <Form
      onValidSubmit={handleSubmit(onSubmit)}
      hidden={signUpStep !== 0}
      loading={submitting}
    >
      <Form.Input
        fluid
        name="firstName"
        label="First Name"
        placeholder={'John'}
        validations="isWords"
        required
        validationErrors={{
          isEmail: 'Please input a valid first name',
          isDefaultRequiredValue: 'First name is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        fluid
        name="lastName"
        label="Last Name"
        placeholder={'Doe'}
        validations="isWords"
        required
        validationErrors={{
          isEmail: 'Please input a valid last name',
          isDefaultRequiredValue: 'Last name is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        fluid
        name="emailAddress"
        label="Email Address"
        placeholder={'inployd@inployd.com'}
        validations="isEmail"
        required
        validationErrors={{
          isEmail: 'Please input a valid email address',
          isDefaultRequiredValue: 'Email address is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        fluid
        name="password"
        label="Password"
        placeholder={'*************'}
        validations="minLength:8"
        required
        validationErrors={{
          minLength: 'Password must at least eight characters long',
          isDefaultRequiredValue: 'Password is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        fluid
        name="confirmPassword"
        label="Confirm Password"
        placeholder={'*************'}
        validations="equalsField:password"
        required
        validationErrors={{
          equalsField: 'Password must match',
          isDefaultRequiredValue: 'Password must match',
        }}
        errorLabel={errorLabel}
      />
      <Form.Group>
        <Form.Button
          primary
          disabled={submitting}
          onClick={onBackStep0}
          content="Back"
        />
        <Form.Button primary disabled={submitting} content="Submit" />
      </Form.Group>
    </Form>
  );
}
