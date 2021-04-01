/**
 * NavigationBar
 */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobileMediaParameters } from '../../../utils/env.config';
import { DesktopNavbar } from './components/desktopNavbar';
import { MobileNavbar } from './components/mobileNavbar';
import { Body } from './components/StyledComponents';

export function NavigationBar() {
  const isMobile = useMediaQuery(mobileMediaParameters);
  const DecideRender = () => {
    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
  };

  return (
    <Body>
      <DecideRender />
    </Body>
  );
}
