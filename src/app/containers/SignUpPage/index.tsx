/**
 * SignUpPage
 */

// Package Imports //
import React from 'react';
import { Button, Form, Step, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store/types';

// Component Imports //
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { selectStep } from '../../../store/SignUp/selectors';
import { actions as sUActions } from '../../../store/SignUp/slice';

export function SignUpPage() {
  const dispatch = useDispatch();
  const signUpStep = useSelector(selectStep);

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
                  <Step.Title>The Basics!</Step.Title>
                </Step.Content>
              </Step>

              <Step active={signUpStep === 1}>
                <Icon name="caret right" />
                <Step.Content>
                  <Step.Title>Help us help you!</Step.Title>
                </Step.Content>
              </Step>

              {/*<Step>*/}
              {/*  <Icon name="caret right" />*/}
              {/*  <Step.Content>*/}
              {/*    <Step.Title>Finalize!</Step.Title>*/}
              {/*  </Step.Content>*/}
              {/*</Step>*/}
            </Step.Group>
          </StepBox>

          <ContentBox>
            {/*Step One*/}
            <Form hidden={signUpStep !== 0}>
              <Form.Field>
                <label>Email Address</label>
                <input placeholder="name@example.com" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="**************" />
              </Form.Field>
            </Form>

            {/*Step Two*/}
            <Form hidden={signUpStep !== 1}>
              <Form.Field>
                <label>Second Input</label>
                <input placeholder="1" />
              </Form.Field>
              <Form.Field>
                <label>Second Password</label>
                <input placeholder="**************" />
              </Form.Field>
            </Form>

            <ButtonBox>
              <Button
                color={'red'}
                onClick={() => {
                  console.log(`Current Step: ${signUpStep}`);
                  console.log(`Decrementing Step`);
                  dispatch(sUActions.decrementStep());
                }}
              >
                Back
              </Button>

              <Button
                color={'green'}
                onClick={() => {
                  console.log(`Current Step: ${signUpStep}`);
                  console.log(`Incrementing Step`);
                  dispatch(sUActions.incrementStep());
                }}
              >
                Next
              </Button>
            </ButtonBox>
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
  width: 710px;
  height: 400px;
  margin: 4.5% auto;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  display: flex;
`;

const ButtonBox = styled.div`
  display: flex;
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
