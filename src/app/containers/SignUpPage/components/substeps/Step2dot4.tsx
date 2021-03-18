import { Form } from 'formsy-semantic-ui-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../../store/SignUp/slice';
import { Label } from 'semantic-ui-react';
import styled from 'styled-components';
import { Expertise } from '../../../../../store/SignUp/types';
import {
  selectCompanyName,
  selectDescription,
  selectExpertiseLevel,
} from '../../../../../store/SignUp/selectors';

export type FormInputs = {
  companyTitle: string;
  expertiseLevel: Expertise;
  description: string;
};

const errorLabel = <Label color="red" pointing />;

export function Step2dot4() {
  // Hooks //
  const { handleSubmit } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const expertiseLevel: Expertise = useSelector(selectExpertiseLevel);
  const companyTitle: string = useSelector(selectCompanyName);
  const description: string = useSelector(selectDescription);
  ///////////

  const onNext = (data, e) => {
    let stepData: FormInputs = e;
    console.log('== Firing Step2Dot4! ==', stepData);

    dispatch(
      actions.setStep2dot4Data({
        companyTitle: stepData.companyTitle,
        expertiseLevel: expertiseLevel, // Change in the future to be better
        description: stepData.description,
      }),
    );

    dispatch(actions.incrementSubStep());
  };

  const onBack = () => {
    dispatch(actions.decrementSubStep());
  };

  const handleRadioButtons = (e, data) => {
    console.log('RADIO BUTTON VALUE:', data);
    dispatch(actions.setExpertiseLevel(data.value));
  };

  return (
    <Form onValidSubmit={handleSubmit(onNext)}>
      <h1>Tell Us More About You</h1>
      <Form.Input
        type={'text'}
        fluid
        name="companyTitle"
        label="Company Title"
        value={companyTitle}
        placeholder={'inployd'}
        required
        validationErrors={{
          isDefaultRequiredValue: 'Company title is required',
        }}
        errorLabel={errorLabel}
      />

      <Form.Group inline>
        <label>Expertise Level</label>
        <Form.Radio
          label="Beginner"
          value={Expertise.Beginner}
          checked={expertiseLevel === Expertise.Beginner}
          onChange={handleRadioButtons}
        />
        <Form.Radio
          label="Intermediate"
          value={Expertise.Intermediate}
          checked={expertiseLevel === Expertise.Intermediate}
          onChange={handleRadioButtons}
        />
        <Form.Radio
          label="Expert"
          value={Expertise.Expert}
          checked={expertiseLevel === Expertise.Expert}
          onChange={handleRadioButtons}
        />
      </Form.Group>

      <Form.TextArea
        style={{ minHeight: 100 }}
        value={description}
        name={'description'}
        placeholder={'Tell us more'}
      />
      {/*<Form.TextArea*/}
      {/*  style={{ minHeight: 100 }}*/}
      {/*  name={'anythingElse'}*/}
      {/*  placeholder={'Anything else you want to share?'}*/}
      {/*></Form.TextArea>*/}
      <Form.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}
      >
        <Form.Button primary onClick={onBack} content="Back" />
        <Form.Button primary content="Next" />
      </Form.Group>
    </Form>
  );
}

const Box = styled.div`
  margin: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
