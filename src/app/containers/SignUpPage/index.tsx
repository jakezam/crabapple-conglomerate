/**
 * SignUpPage
 */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectStep,
  selectUnableToCreate,
} from '../../../store/SignUp/selectors';
import { actions, sliceKey } from '../../../store/SignUp/slice';
import { Header } from '../../components/Header';
import { useInjectSaga } from '../../../utils/redux-injectors';
import { signUpPageSaga } from 'store/SignUp/saga';
import { Modal, Button } from 'semantic-ui-react';
import { StepBox } from './components/StepBox';
import { Step0 } from './components/Step0';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Footer } from '../../components/Footer';

export function SignUpPage() {
  /* Instead of a global watcher, we will only activate the saga
     when this component is rendered */
  useInjectSaga({ key: sliceKey, saga: signUpPageSaga });

  // Hooks //
  const dispatch = useDispatch();
  const creationState = useSelector(selectUnableToCreate);
  const signUpStep = useSelector(selectStep);
  ///////////

  return (
    <Container>
      <Header />
      <Body>
        <Modal
          basic
          dimmer={true}
          open={creationState}
          onClose={() => dispatch(actions.setUnableToCreate(false))}
        >
          <Modal.Header style={{ display: 'flex', justifyContent: 'center' }}>
            Unable to create an account!
          </Modal.Header>
          <Modal.Content style={{ display: 'flex', justifyContent: 'center' }}>
            Unfortunately something went wrong trying to create your account.
            Please try again later.
          </Modal.Content>
          <Modal.Actions style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              primary
              onClick={() => dispatch(actions.setUnableToCreate(false))}
            >
              Ok!
            </Button>
          </Modal.Actions>
        </Modal>

        <h1>Sign Up</h1>

        <InnerBody currentStep={signUpStep}>
          {signUpStep === 2 && <StepBox />}
          <ContentBox>
            {/*Step zero -- init user*/}
            <Step0 />

            {/*/!*Step one -- provider yes/no*!/*/}
            <Step1 />

            {/*/!*Step two -- Provider Final*!/*/}
            {signUpStep === 2 && <Step2 />}
          </ContentBox>
        </InnerBody>
      </Body>
      <Footer />
    </Container>
  );
}

interface StepProps {
  currentStep: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;

  // DEBUG STYLES //
  //border: solid 5px green;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  // DEBUG STYLES //
  border: solid 5px orange;
`;

const InnerBody = styled.div<StepProps>`
  margin: 4.5% auto;
  padding: 2.5%;
  display: flex;
  flex-direction: ${props => (props.currentStep > 1 ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);

  // DEBUG STYLES //
  //border: solid 5px green;
`;

const ContentBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
