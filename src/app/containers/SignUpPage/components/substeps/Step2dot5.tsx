import { Dropdown, Form } from 'formsy-semantic-ui-react';
import { Label } from 'semantic-ui-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../../store/SignUp/slice';
import {
  selectAptNum,
  selectCity,
  selectCreatingAccount,
  selectCreatingProviderAccount,
  selectState,
  selectStreetAddress,
  selectZip,
} from '../../../../../store/SignUp/selectors';

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

export type FormInputs = {
  streetAddress: string;
  aptNum: string;
  city: string;
  state: string;
  zip: string;
};

const errorLabel = <Label color="red" pointing />;

export function Step2dot5() {
  // Hooks //
  const { handleSubmit } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const streetAddress: string = useSelector(selectStreetAddress);
  const aptNum: string = useSelector(selectAptNum);
  const city: string = useSelector(selectCity);
  const state: string = useSelector(selectState);
  const zip: string = useSelector(selectZip);
  const creatingProviderAccount = useSelector(selectCreatingProviderAccount);
  ///////////

  const onFinish = (e, data) => {
    let stepData: FormInputs = data;
    console.log('== Firing Step2Dot5! ==', stepData);

    dispatch(
      actions.setStep2dot5Data({
        streetAddress: stepData.streetAddress,
        aptNum: stepData.aptNum,
        city: stepData.city,
        state: stepData.state,
        zip: stepData.zip,
      }),
    );

    // dispatch(push('/home'));
  };

  const onBack = () => {
    dispatch(actions.decrementSubStep());
  };

  const handleChange = (e, data) => {};

  return (
    <Form
      onValidSubmit={handleSubmit(onFinish)}
      loading={creatingProviderAccount}
    >
      <h1>Where Are You Located</h1>
      <Form.Input
        fluid
        value={streetAddress}
        name="streetAddress"
        label="Street Address"
        placeholder={'123 Funny Street'}
        required
        validationErrors={{
          isDefaultRequiredValue: 'Street Address is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        value={aptNum}
        fluid
        name="aptNum"
        placeholder={'Apt/Suite'}
      />
      <Form.Input
        fluid
        value={city}
        name="city"
        label="City"
        placeholder={'Canaan'}
        required
        validationErrors={{
          isDefaultRequiredValue: 'City is Required',
        }}
        errorLabel={errorLabel}
      />
      <Dropdown
        value={state}
        name={'state'}
        placeholder="Select State"
        fluid
        search
        selection
        options={stateOptions}
        required
        validationErrors={{
          isDefaultRequiredValue: 'State is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Input
        fluid
        value={zip}
        placeholder={'12345'}
        name="zip"
        label="ZIP / Postal Code"
        required
        validationErrors={{
          isDefaultRequiredValue: 'ZIP / Postal is Required',
        }}
        errorLabel={errorLabel}
      />
      {/*== Down the line implement an address checker ==*/}
      {/*How far will you go to help people?*/}
      {/*Show a map with a circle radius*/}
      <Form.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}
      >
        <Form.Button primary onClick={onBack} content="Back" />
        <Form.Button primary content="Finish" />
      </Form.Group>
    </Form>
  );
}
