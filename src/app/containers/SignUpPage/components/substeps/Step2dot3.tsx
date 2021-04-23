import { Form, Input } from 'formsy-semantic-ui-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../../store/SignUp/slice';
import { Label } from 'semantic-ui-react';
import {
  selectMainCategory,
  selectStandardRates,
  selectSubCategories,
} from 'store/SignUp/selectors';
import styled from 'styled-components';
import { IStandardRates } from '../../../../../store/SignUp/types';

export type FormInputs = {
  [name: string]: string;
};

const errorLabel = <Label color="red" pointing />;

export function Step2dot3() {
  // Hooks //
  const { handleSubmit } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const mainCategory: string = useSelector(selectMainCategory);
  const subCategories: Array<string> | null = useSelector(selectSubCategories);
  const standardRates: Array<IStandardRates> = useSelector(selectStandardRates);
  ///////////

  let generatedInputs: any[] = [];

  if (subCategories !== undefined) {
    let i = 0;
    for (let category of subCategories) {
      generatedInputs.push(
        <Box key={i}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              Flat Rate
              <Input
                name={category + '_flatRate'}
                labelPosition="left"
                type="number"
                placeholder="0.00"
                value={standardRates[i]?.flatRate ?? ''}
              >
                <Label basic>$</Label>
                <input />
              </Input>
            </div>
            <div>
              Hourly Rate
              <Input
                name={category + '_hourlyRate'}
                labelPosition="left"
                type="number"
                placeholder="0.00"
                value={standardRates[i]?.hourlyRate ?? ''}
              >
                <Label basic>$</Label>
                <input />
              </Input>
            </div>
          </div>
        </Box>,
      );
      i++;
    }
  }

  const onNext = (data, e) => {
    let stepData: FormInputs = e;
    console.log('== Firing Step2Dot3! ==', stepData);
    let submitData: Array<IStandardRates> = [];
    if (subCategories !== undefined)
      for (let category of subCategories) {
        submitData.push({
          category: category,
          flatRate: stepData[category + '_flatRate'],
          hourlyRate: stepData[category + '_hourlyRate'],
        });
      }
    else
      submitData.push({
        category: mainCategory,
        flatRate: stepData[mainCategory + '_flatRate'],
        hourlyRate: stepData[mainCategory + '_hourlyRate'],
      });

    dispatch(actions.setStep2dot3Data(submitData));

    dispatch(actions.incrementSubStep());
  };

  const onBack = () => {
    dispatch(actions.decrementSubStep());
  };

  return (
    <>
      {' '}
      <h1>Standard Rates?</h1>
      <Container>
        {subCategories.length === 0 && (
          <Form onValidSubmit={handleSubmit(onNext)}>
            {/*Option pricing options*/}
            {/*See lucidcharts for detailed view*/}
            <h3>Flat Rate</h3>
            <Input
              name={mainCategory + '_flatRate'}
              labelPosition="left"
              type="number"
              placeholder="0.00"
              required
              validationErrors={{
                isDefaultRequiredValue: 'Rate is Required',
              }}
            >
              <Label basic>$</Label>
              <input />
            </Input>
            <h3>Hourly Rate</h3>
            <Input
              name={mainCategory + '_hourlyRate'}
              labelPosition="left"
              type="number"
              placeholder="0.00"
              required
              validationErrors={{
                isDefaultRequiredValue: 'Rate is Required',
              }}
            >
              <Label basic>$</Label>
              <input />
            </Input>
            <Form.Group
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '15px',
              }}
            >
              <Form.Button primary onClick={onBack} content="Back" />
              <Form.Button primary content="Next" />
            </Form.Group>
          </Form>
        )}

        {subCategories.length > 0 && (
          <>
            <h3>For each job input the hourly rate, flat rate, or both.</h3>
            <Form onValidSubmit={handleSubmit(onNext)}>
              {generatedInputs}
              <Form.Group
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '15px',
                }}
              >
                <Form.Button primary onClick={onBack} content="Back" />
                <Form.Button primary content="Next" />
              </Form.Group>
            </Form>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: center;

  // DEBUG STYLES //
  //border: solid 5px orange;
`;
