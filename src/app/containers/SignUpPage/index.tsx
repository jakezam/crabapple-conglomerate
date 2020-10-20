/**
 * SignUpPage
 */

/* eslint-disable  @typescript-eslint/no-unused-vars */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { push } from 'connected-react-router';
import {
  selectCreatingAccount,
  selectStep,
  selectUnableToCreate,
} from '../../../store/SignUp/selectors';
import { actions, sliceKey } from '../../../store/SignUp/slice';

// Component Imports //
import { Header } from '../../components/Header';
import { IUser } from '../../../store/SignUp/types';
import { useInjectSaga } from '../../../utils/redux-injectors';
import { signUpPageSaga } from 'store/SignUp/saga';
import { Button, Modal, Step } from 'semantic-ui-react';

type Inputs = {
  emailAddress: string;
  password: string;
  confirmPass: string;
};

const stateOptions = [
  { key: 'al', text: 'Alabama', value: 'alabama' },
  { key: 'ak', text: 'Alaska', value: 'alaska' },
  { key: 'az', text: 'Arizona', value: 'arizona' },
  { key: 'ar', text: 'Arkansas', value: 'arkansas' },
  { key: 'ca', text: 'California', value: 'california' },
  { key: 'co', text: 'Colorado', value: 'colorado' },
  { key: 'ct', text: 'Connecticut', value: 'connecticut' },
  { key: 'de', text: 'Delaware', value: 'delaware' },
  { key: 'fl', text: 'Florida', value: 'florida' },
  { key: 'ga', text: 'Georgia', value: 'georgia' },
  { key: 'hi', text: 'Hawaii', value: 'hawaii' },
  { key: 'id', text: 'Idaho', value: 'idaho' },
  { key: 'il', text: 'Illinois', value: 'illinois' },
  { key: 'in', text: 'Indiana', value: 'indiana' },
  { key: 'ia', text: 'Iowa', value: 'iowa' },
  { key: 'ks', text: 'Kansas', value: 'kansas' },
  { key: 'ky', text: 'Kentucky', value: 'kentucky' },
  { key: 'la', text: 'Louisiana', value: 'louisiana' },
  { key: 'me', text: 'Maine', value: 'maine' },
  { key: 'md', text: 'Maryland', value: 'maryland' },
  { key: 'ma', text: 'Massachusetts', value: 'massachusetts' },
  { key: 'mi', text: 'Michigan', value: 'michigan' },
  { key: 'mn', text: 'Minnesota', value: 'minnesota' },
  { key: 'ms', text: 'Mississippi', value: 'mississippi' },
  { key: 'mo', text: 'Missouri', value: 'missouri' },
  { key: 'mt', text: 'Montana', value: 'montana' },
  { key: 'ne', text: 'Nebraska', value: 'nebraska' },
  { key: 'nh', text: 'New Hampshire', value: 'new_hampshire' },
  { key: 'nj', text: 'New Jersey', value: 'new_jersey' },
  { key: 'nm', text: 'New Mexico', value: 'new_mexico' },
  { key: 'ny', text: 'New York', value: 'new_york' },
  { key: 'nc', text: 'North Carolina', value: 'north_carolina' },
  { key: 'nd', text: 'North Dakota', value: 'north_dakota' },
  { key: 'oh', text: 'Ohio', value: 'ohio' },
  { key: 'ok', text: 'Oklahoma', value: 'oklahoma' },
  { key: 'or', text: 'Oregon', value: 'oregon' },
  { key: 'pa', text: 'Pennsylvania', value: 'pennsylvania' },
  { key: 'ri', text: 'Rhode Island', value: 'rhode_island' },
  { key: 'sc', text: 'South Carolina', value: 'south_carolina' },
  { key: 'sd', text: 'South Dakota', value: 'south_dakota' },
  { key: 'tn', text: 'Tennessee', value: 'tennessee' },
  { key: 'tx', text: 'Texas', value: 'texas' },
  { key: 'ut', text: 'Utah', value: 'utah' },
  { key: 'vt', text: 'Vermont', value: 'vermont' },
  { key: 'va', text: 'Virginia', value: 'virginia' },
  { key: 'wa', text: 'Washington', value: 'washington' },
  { key: 'wv', text: 'West Virginia', value: 'west_virginia' },
  { key: 'wi', text: 'Wisconsin', value: 'wisconsin' },
  { key: 'wy', text: 'Wyoming', value: 'wyoming' },
  { key: 'dc', text: 'District of Columbia', value: 'district_of_columbia' },
];

// Setup to get from database
const primaryCategories = [
  { key: 'T1', text: 'Test1', value: 'test1' },
  { key: 'T2', text: 'Test2', value: 'test2' },
  { key: 'T3', text: 'Test3', value: 'test3' },
  { key: 'T4', text: 'Test4', value: 'test4' },
];

// Setup to get from database
const secondaryCategories = [
  { key: 'T1', text: 'Test1', value: 'test1' },
  { key: 'T2', text: 'Test2', value: 'test2' },
  { key: 'T3', text: 'Test3', value: 'test3' },
  { key: 'T4', text: 'Test4', value: 'test4' },
];

export function SignUpPage() {
  useInjectSaga({ key: sliceKey, saga: signUpPageSaga });

  // Hooks //
  const dispatch = useDispatch();
  const signUpStep = useSelector(selectStep);
  const submitting = useSelector(selectCreatingAccount);
  const showModal = useSelector(selectUnableToCreate);
  const { handleSubmit } = useForm<Inputs>();
  ///////////

  const onSubmitStep0 = (data, e) => {
    let userData: IUser = e;
    console.log('Step Zero Data: ', userData);

    dispatch(
      actions.setUserData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        emailAddress: userData.emailAddress,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      }),
    );

    // dispatch(actions.incrementStep());
  };

  const onSubmitStep1 = (data, e) => {
    dispatch(actions.setStep(3));
  };

  const onSubmitStep2 = (data, e) => {
    dispatch(actions.incrementStep);
  };

  const onSubmitStep3 = (data, e) => {
    dispatch(actions.incrementStep);
  };

  // Step 0 (Cancel Sign Up)
  const onBackStep0 = () => {
    dispatch(push('/'));
  };

  // Step 1 (No Thanks)
  const onBackStep1 = () => {
    dispatch(actions.setStep(2));
  };

  // Step 3 (Nevermind)
  const onBackStep3 = () => {
    dispatch(actions.setStep(2));
  };

  return (
    <>
      <Header />
      <Body>
        <Modal
          basic
          dimmer={true}
          open={showModal}
          onClose={() => dispatch(actions.setUnableToCreate(false))}
        >
          <Modal.Header>Unable to create an account!</Modal.Header>
          <Modal.Content>
            Unfortunately something went wrong trying to create your account.
            Please try again later.
          </Modal.Content>
          <Modal.Actions>
            <Button
              primary
              onClick={() => dispatch(actions.setUnableToCreate(false))}
            >
              Ok!
            </Button>
          </Modal.Actions>
        </Modal>

        <InnerBody>
          {/* <StepBox /> */}
          <ContentBox>
            {/*Step zero -- init user*/}
            {/* <Step0 /> */}

            {/*Step one -- provider yes/no*/}
            {/* <Step1 /> */}

            {/*Step two -- Consumer Final*/}
            {/* <Step2 /> */}

            {/*Step three -- Provider Final*/}
            {/* <Step3 /> */}
          </ContentBox>
        </InnerBody>
      </Body>
      {/*<Footer />*/}
    </>
  );
}

/*
Company Name
Company Website/Linkedin
DOB
Primary Categories
Sub Categories
Location
Portfolio Upload
About
 */

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

const ContentBox = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //border: solid blue;
`;
