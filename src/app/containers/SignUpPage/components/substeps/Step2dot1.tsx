import { Message, Button } from 'semantic-ui-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../../store/SignUp/slice';
import styled from 'styled-components';

export function Step2dot1() {
  // Hooks //
  const dispatch = useDispatch();
  ///////////

  const onContinue = () => {
    dispatch(actions.incrementSubStep());
  };

  const onBack = () => {
    dispatch(actions.decrementStep());
  };

  return (
    <Box>
      <h1>Getting You Set Up!</h1>
      <Message>
        <Message.Header>
          Becoming a provider on inployd means you can sell your services to a
          great network of users. To get started we need some information from
          you.
        </Message.Header>
      </Message>
      <div>
        <Button primary onClick={onBack} content="Back" />
        <Button primary onClick={onContinue} content="Continue" />
      </div>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // DEBUG STYLES //
  //border: red 5px solid;
`;
