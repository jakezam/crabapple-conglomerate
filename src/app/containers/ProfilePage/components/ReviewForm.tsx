/**
 *
 * RecommendedAccount
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import {
  Button,
  Checkbox,
  Form,
  Modal,
  Rating,
  TextArea,
} from 'semantic-ui-react';

export function ReviewForm() {
  const [open, setOpen] = React.useState(false);

  let btnTrigger = <Button size="mini">Leave Review</Button>;

  let content = (
    <Form>
      <Form.Field widths="equal">
        <Rating maxRating={5} size="massive" />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Review Header"
          placeholder="Place Header Here"
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Description"
        placeholder="Leave review contents here..."
      />
      <Form.Field>
        <Checkbox label="Yes, I would recommend this account" />
      </Form.Field>
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
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Leave Review"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Body>
  );
}

const Body = styled.div``;
