/**
 * Footer
 */
import React from 'react';
import {
  Container,
  CopyrightBox,
  Segment,
  TopBox,
} from '../../containers/SplashPage/components/StyledComponents';
import ReactDynamicFont from 'react-dynamic-font';
import { Button, Icon, Label } from 'semantic-ui-react';

export function Footer() {
  return (
    <Container>
      <TopBox>
        <Segment>
          <Button fluid>
            <Label>About Us</Label>
          </Button>
          <Button fluid>
            <Label>Privacy Policy</Label>
          </Button>
        </Segment>

        <Segment>
          <Button fluid>
            <Label>Feedback</Label>
          </Button>
          <Button fluid>
            <Label>Terms Of Service</Label>
          </Button>
        </Segment>

        <Segment>
          <Button fluid>
            <Label>Support</Label>
          </Button>
          <Button fluid>
            <Label>Cookie Policy</Label>
          </Button>
        </Segment>
      </TopBox>

      <CopyrightBox>
        <Label>2021 inployd</Label>
        <Icon name={'copyright'} />
      </CopyrightBox>
    </Container>
  );
}
