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
import { mobileMediaParameters } from '../../../utils/env.config';
import { useMediaQuery } from 'react-responsive';

export function Footer() {
  const isMobile = useMediaQuery(mobileMediaParameters);

  return (
    <Container>
      <TopBox isMobile={isMobile}>
        <Segment isMobile={isMobile}>
          <Button fluid>
            <Label>About Us</Label>
          </Button>
          <Button fluid>
            <Label>Privacy Policy</Label>
          </Button>
        </Segment>

        <Segment isMobile={isMobile}>
          <Button fluid>
            <Label>Feedback</Label>
          </Button>
          <Button fluid>
            <Label>Terms Of Service</Label>
          </Button>
        </Segment>

        <Segment isMobile={isMobile}>
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
