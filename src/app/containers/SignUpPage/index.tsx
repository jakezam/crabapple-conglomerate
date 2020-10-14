/**
 * SignUpPage
 */

/* eslint-disable  @typescript-eslint/no-unused-vars */

// Package Imports //
import React, { useEffect, useState } from 'react';
import { Step, Icon, Label } from 'semantic-ui-react';
import {
  Form,
  Input,
  TextArea,
  Checkbox,
  Radio,
  RadioGroup,
  Dropdown,
  Select,
} from 'formsy-semantic-ui-react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// Component Imports //
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { selectStep } from '../../../store/SignUp/selectors';
import { push } from 'connected-react-router';
import { Api } from 'services/api';
import { REACT_APP_API_BASE_URL } from '../../../utils/env.config';

type Inputs = {
  emailAddress: string;
  password: string;
  confirmPass: string;
};

export function SignUpPage() {
  // Local State //
  const [formContent, setFormContent] = useState({
    emailAddress: '',
    password: '',
    confirmPass: '',
  });
  /////////////////

  // Hooks //
  const dispatch = useDispatch();
  const signUpStep = useSelector(selectStep);
  const { register, handleSubmit, watch, errors, setValue, trigger } = useForm<
    Inputs
  >();
  ///////////

  const onSubmit = (data, e) => {
    // API call to create user
    // Display is user already exists
  };

  const onBack = () => {
    if (signUpStep === 0) {
      dispatch(push('/'));
      return;
    }
  };

  const errorLabel = <Label color="red" pointing />;

  return (
    <>
      <Header />
      <Body>
        <InnerBody>
          <StepBox>
            <Step.Group vertical>
              <Step active={signUpStep === 0}>
                <Icon name="caret right" />
                <Step.Content>
                  <Step.Title>Step One</Step.Title>
                </Step.Content>
              </Step>

              <Step active={signUpStep === 1}>
                <Icon name="caret right" />
                <Step.Content>
                  <Step.Title>Step Two</Step.Title>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="caret right" />
                <Step.Content>
                  <Step.Title>Step Three</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </StepBox>

          <ContentBox>
            {/*Step One*/}
            <Form
              onValidSubmit={handleSubmit(onSubmit)}
              hidden={signUpStep !== 0}
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
                name="confirmPass"
                label="Confirm Password"
                validations="equalsField:password"
                required
                validationErrors={{
                  equalsField: 'Password must match',
                  isDefaultRequiredValue: 'Password must match',
                }}
                errorLabel={errorLabel}
              />
              <Form.Group>
                <Form.Button onClick={onBack} content="Back" />
                <Form.Button content="Submit" />
              </Form.Group>
            </Form>
          </ContentBox>
        </InnerBody>
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
`;

const InnerBody = styled.div`
  width: 50%;
  height: 50%;
  margin: 4.5% auto;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  display: flex;
`;

const ButtonBox = styled.div`
  display: flex;
  margin: 1em;
`;

const StepBox = styled.div`
  width: 50%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid rgba(34, 36, 38, 0.15);

  //border: solid red;
`;

const ContentBox = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //border: solid blue;
`;
