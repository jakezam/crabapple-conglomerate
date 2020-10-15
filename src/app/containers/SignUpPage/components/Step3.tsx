import { Dropdown, Form } from 'formsy-semantic-ui-react';
import { Icon, Popup } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import React from 'react';

export function step3() {
  return (
    <Form onValidSubmit={handleSubmit(onSubmitStep3)} hidden={signUpStep !== 3}>
      <Form.Input
        fluid
        name="companyName"
        label="Company Name"
        placeholder={'inployd'}
        validations="isWords"
        required
        validationErrors={{
          // isEmail: 'Please input a valid first name',
          isDefaultRequiredValue: 'Company name is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Group>
        <Form.Input
          fluid
          name="companyLink"
          label="Company Link"
          placeholder={'inployd.com'}
          validations="isWords"
          validationErrors={
            {
              // isEmail: 'Please input a valid first name',
              // isDefaultRequiredValue: 'Company name is Required',
            }
          }
          errorLabel={errorLabel}
        />
        <Popup
          content={
            'Company link is a link to your website or something like your linkedin profile!'
          }
          trigger={<Icon name="question circle" />}
        />
      </Form.Group>
      Date of Birth:
      <SemanticDatepicker />
      Primary Category:
      <Dropdown
        name={'primaryCategoryDrop'}
        fluid
        placeholder={'Categories'}
        search
        selection
        options={primaryCategories}
      />
      Sub Categories:
      <Dropdown
        name={'subCategoryDrop'}
        clearable
        fluid
        multiple
        search
        selection
        placeholder={'Sub-Categories'}
        options={secondaryCategories}
      />
      State;
      <Dropdown
        name={'stateDrop'}
        clearable
        fluid
        multiple
        search
        selection
        placeholder={'State'}
        options={stateOptions}
      />
      <Form.Group>
        <Form.Button primary onClick={onBackStep3} content="Nevermind" />
        <Form.Button primary content="Finish" />
      </Form.Group>
    </Form>
  );
}
