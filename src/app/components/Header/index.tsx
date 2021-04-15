/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

export function Header() {
  return <Logo src="black_inployd.png" alt="none" />;
}

const Logo = styled.img`
  max-width: 100%;
  height: clamp(4em, 10em, 10%);

  //display: flex;
  //flex: 1;

  margin-left: auto;
  margin-right: auto;

  // DEBUG STYLES //
  //border: 5px solid red;
`;
