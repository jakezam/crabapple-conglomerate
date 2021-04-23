/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import {
  Button,
  Form,
  Label,
  Modal,
  Rating,
  TextArea,
} from 'semantic-ui-react';
import { actions, sliceKey } from '../../../../store/Review/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from '../../../../utils/redux-injectors';
import { reviewSaga } from 'store/Review/saga';
import { selectReview } from '../../../../store/Review/selectors';

const errorLabel = <Label color="red" pointing />;

export function ReviewForm() {
  useInjectSaga({ key: sliceKey, saga: reviewSaga });

  const dispatch = useDispatch();
  const reviewState = useSelector(selectReview);

  const [open, setOpen] = React.useState(false);

  let btnTrigger = <Button size="mini">Leave Review</Button>;
  if (reviewState.leftReview) {
    btnTrigger = (
      <Button disabled size="mini">
        Leave Review
      </Button>
    );
  }
  let isRecommending = false;

  const handleRate = (e, data) => {
    dispatch(actions.setRating(data.rating));
  };

  let content = (
    <Form
      onSubmit={() => {
        setOpen(false);
        dispatch(actions.setRecommendationStatus(isRecommending));
      }}
    >
      <Form.Field widths="equal">
        <Rating
          defaultRating={reviewState.rating}
          maxRating={5}
          size="massive"
          onRate={handleRate}
        />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Review Header"
          value={reviewState.header}
          onChange={(e, data) => {
            dispatch(actions.setHeader(data.value));
          }}
          validations="isWords"
          required
          validationErrors={{
            isDefaultRequiredValue: 'Header is Required',
          }}
          errorLabel={errorLabel}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Description"
        value={reviewState.description}
        onChange={(e, data) => {
          dispatch(actions.setDescription(data.value));
        }}
        validations="isWords"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Field is Required',
        }}
        errorLabel={errorLabel}
      />
      <Form.Checkbox
        label="Yes, I would recommend this account"
        onClick={(e, data) => {
          isRecommending = data.checked ? data.checked : true;
        }}
      />
      <Form.Group style={{ marginTop: '35px' }}>
        <Form.Button
          color="black"
          onClick={() => setOpen(false)}
          content="Cancel"
        />
        <Form.Button
          content="Leave Review"
          labelPosition="right"
          icon="checkmark"
          positive
        />
      </Form.Group>
    </Form>
  );

  return (
    <Body>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={btnTrigger}
      >
        <Modal.Header>Leave Review</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
      </Modal>
    </Body>
  );
}

const Body = styled.div``;
