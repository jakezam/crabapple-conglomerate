/**
 * SplashPage
 */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobileMediaParameters } from '../../../utils/env.config';
import { MobileSplashPage } from './views/MobileSplashPage';
import { DesktopSplashPage } from './views/DesktopSplashPage';
import styled from 'styled-components/macro';

export function SplashPage() {
  const isMobile = useMediaQuery(mobileMediaParameters);

  const DecideRender = () => {
    return isMobile ? <DesktopSplashPage /> : <DesktopSplashPage />;
  };
  return (
    <Container>
      <DecideRender />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;

  // DEBUG STYLES //
  border: solid 5px red;
`;
