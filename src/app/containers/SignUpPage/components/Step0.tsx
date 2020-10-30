import { Form, Checkbox } from 'formsy-semantic-ui-react';
import React from 'react';
import { Label } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { actions } from '../../../../store/SignUp/slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCreatingAccount,
  selectStep,
} from '../../../../store/SignUp/selectors';
import { push } from 'connected-react-router';
import { IUserData } from '../../../../store/SignUp/types';

type FormInputs = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPass: string;
};

const errorLabel = <Label color="red" pointing />;

/* Initial User Creation, here the user will enter their
   First Name, Last Name, Email Address, and Password */
/* Opted to not include gender and location information as
   it is not necessarily needed. User location can be obtained
   through browser. Such a location option will be included in
   the settings. */
export function Step0() {
  // Hooks //
  const { handleSubmit } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const signUpStep = useSelector(selectStep);
  const creatingAccount = useSelector(selectCreatingAccount);
  ///////////

  // Create 'User' Account In Database //
  const onSubmit = (data, e) => {
    let userData: IUserData = e;
    console.log('== Firing Step Zero! ==', userData);

    dispatch(
      actions.setUserData({
        userId: '', // Might remove this in the future from this action
        firstName: userData.firstName,
        lastName: userData.lastName,
        emailAddress: userData.emailAddress,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      }),
    );
  };

  // Send back to Splash Page //
  const onBack = () => {
    dispatch(push('/'));
  };

  return (
    <Form
      onValidSubmit={handleSubmit(onSubmit)}
      hidden={signUpStep !== 0}
      loading={creatingAccount}
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
        type={'password'}
        fluid
        name="password"
        label="Password"
        placeholder={'*************'}
        validations="minLength:8" // Possibly require more?
        required
        validationErrors={{
          minLength: 'Password must at least eight characters long',
          isDefaultRequiredValue: 'Password is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        type={'password'}
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
      <Checkbox
        label="Accept privacy policy and terms of service"
        name={'tosCheck'}
        required
        validationErrors={{
          isDefaultRequiredValue: '',
        }}
      />
      <Form.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}
      >
        <Form.Button
          primary
          disabled={creatingAccount}
          onClick={onBack}
          content="Back"
        />
        <Form.Button primary disabled={creatingAccount} content="Submit" />
      </Form.Group>
    </Form>
  );
}
