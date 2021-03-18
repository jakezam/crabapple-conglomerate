/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Header(props: Props) {
  return (
    <Body>
      <Logo src="black_inployd.png" alt="none" />
    </Body>
  );
}

const Body = styled.div`
  padding: 13px 170px;
  height: 90px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
`;

const Logo = styled.img`
  height: 70px;
  width: 157px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
