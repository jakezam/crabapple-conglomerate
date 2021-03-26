/**
 * Footer
 */
import React, { useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { mobileMediaParameters } from '../../../utils/env.config';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  CopyrightBox,
  Segment,
  TopBox,
} from './components/StyledComponents';
import ReactDynamicFont from 'react-dynamic-font';
import useResizeObserver from 'use-resize-observer';

export function Footer() {
  const isMobile = useMediaQuery(mobileMediaParameters);

  return (
    <Container isMobile={isMobile}>
      <TopBox isMobile={isMobile}>
        <Segment isMobile={isMobile}>
          <Button fluid>
            <ReactDynamicFont content={'About Us'} />
          </Button>
          <Button fluid>
            <ReactDynamicFont content={'Privacy Policy'} />
          </Button>
        </Segment>

        <Segment isMobile={isMobile}>
          <Button fluid>
            <ReactDynamicFont content={'Feedback'} />
          </Button>
          <Button fluid>
            <ReactDynamicFont content={'Terms Of Service'} />
          </Button>
        </Segment>

        <Segment isMobile={isMobile}>
          <Button fluid>
            <ReactDynamicFont content={'Support'} />
          </Button>
          <Button fluid>
            <ReactDynamicFont content={'Cookie Policy'} />
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
