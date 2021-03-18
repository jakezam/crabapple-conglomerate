import { Icon, Step } from 'semantic-ui-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectStep, selectSubStep } from '../../../../store/SignUp/selectors';
import styled from 'styled-components';

/*
Box located to the side on the SignUp page. Indicates
the current step within the sign up process.
*/
export function StepBox() {
  const subStep = useSelector(selectSubStep);

  return (
    <Box>
      <Step.Group vertical>
        <Step active={subStep === 1}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Getting You Set Up</Step.Title>
          </Step.Content>
        </Step>

        <Step active={subStep === 2}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>What Is It You Do</Step.Title>
          </Step.Content>
        </Step>

        <Step active={subStep === 3}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Standard Rates</Step.Title>
          </Step.Content>
        </Step>

        <Step active={subStep === 4}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Tell Us More About You</Step.Title>
          </Step.Content>
        </Step>

        <Step active={subStep === 5}>
          <Icon name="caret right" />
          <Step.Content>
            <Step.Title>Where Are You Located</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Box>
  );
}

const Box = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid rgba(34, 36, 38, 0.15);
`;
