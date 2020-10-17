import { Icon, Step } from 'semantic-ui-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectStep } from '../../../../store/SignUp/selectors';
import styled from 'styled-components';

export function StepBox() {
  const signUpStep = useSelector(selectStep);

  return (
    <Box>
      <Step.Group vertical>
        <Step active={signUpStep === 0}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Step One</Step.Title>
          </Step.Content>
        </Step>

        <Step active={signUpStep === 1}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Step Two</Step.Title>
          </Step.Content>
        </Step>

        <Step active={signUpStep === 2}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Step Three</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Box>
  );
}

const Box = styled.div`
  width: 50%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid rgba(34, 36, 38, 0.15);

  //border: solid red;
`;
