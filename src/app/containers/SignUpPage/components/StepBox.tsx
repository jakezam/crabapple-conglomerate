import { Icon, Step } from 'semantic-ui-react';
import React from 'react';

export function stepBox() {
  return (
    <StepBox>
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
    </StepBox>
  );
}
