import { Dropdown, Form } from 'formsy-semantic-ui-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMainCategory,
  selectPossibleMainCategories,
  selectPossibleSubCategories,
  selectSubCategories,
} from '../../../../../store/SignUp/selectors';
import { actions } from '../../../../../store/SignUp/slice';
import { Icon, Label, Popup } from 'semantic-ui-react';
import { ISelectableCategory } from '../../../../../store/SignUp/types';

export type FormInputs = {
  mainWorkCategory: string;
  customSkills: Array<string>;
};

const errorLabel = <Label color="red" pointing />;

export function Step2dot2() {
  // Hooks //
  const { handleSubmit } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const mainCategory: string = useSelector(selectMainCategory);
  const subCategories: Array<string> | null = useSelector(selectSubCategories);
  const possibleMainCategory: Array<ISelectableCategory> = useSelector(
    selectPossibleMainCategories,
  );
  const possibleSubCategories: Array<ISelectableCategory> = useSelector(
    selectPossibleSubCategories,
  );
  ///////////

  const onNext = (e, data) => {
    let stepData: FormInputs = data;
    console.log('== Firing Step2Dot2! ==', stepData);

    dispatch(
      actions.setStep2dot2Data({
        mainWorkCategory: stepData.mainWorkCategory,
        customSkills: stepData.customSkills,
      }),
    );

    dispatch(actions.incrementSubStep());
  };

  const onBack = () => {
    dispatch(actions.decrementSubStep());
  };

  /* Develop some sort of verification system, for
     valid subcategories and then add them to a global
     list when vetted */
  const handleAddition = (e, data) => {
    console.log(data);

    dispatch(
      actions.setPossibleSubCategories([
        ...possibleSubCategories,
        { key: data.value, text: data.value, value: data.value },
      ]),
    );

    // console.log(possibleSubCategories);
  };

  return (
    <Form onValidSubmit={handleSubmit(onNext)}>
      <h1>What Is It You Do?</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h4>Area of service</h4>{' '}
        <Popup
          style={{ padding: '10px' }}
          trigger={<Icon name="help" size="small" />}
          content="Area of service is the main category you will be providing
          on inployd. For example, if you are a landscaper you will put landscaper. Below
          you will be given an opportunity to pick specifics in your category that you do."
          position="top left"
        />
      </div>
      <Dropdown
        name={'mainWorkCategory'}
        placeholder="Main Work Category"
        fluid
        search
        selection
        value={mainCategory}
        options={possibleMainCategory}
        required
        validationErrors={{
          isDefaultRequiredValue: 'Main Category is Required',
        }}
        errorLabel={errorLabel}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h4>Sub Categories</h4>{' '}
        <Popup
          style={{ padding: '10px' }}
          trigger={<Icon name="help" size="small" />}
          content="More specific categories under your selected main category. Feel
          free to add as many as you want!"
          position="top left"
        />
      </div>
      <Dropdown
        name={'customSkills'}
        placeholder="Custom Skills"
        fluid
        multiple
        search
        value={subCategories}
        allowAdditions
        onAddItem={handleAddition}
        selection
        options={possibleSubCategories}
      />
      <Form.Group
        style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}
      >
        <Form.Button primary onClick={onBack} content="Back" />
        <Form.Button primary content="Next" />
      </Form.Group>
    </Form>
  );
}
