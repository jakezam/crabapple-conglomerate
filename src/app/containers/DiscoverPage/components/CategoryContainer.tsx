/**
 *
 * Category Container
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from 'semantic-ui-react';

export function CategoryContainer() {
  return (
    <Body>
      <h4 style={{ padding: '20px 0px 0px 20px' }}>
        Find a Service Provider in your Area:
      </h4>
      <AccountContainer>
        <Button>Landscaping</Button>
      </AccountContainer>
    </Body>
  );
}

const Body = styled.div`
  max-width: 630px;
  min-height: 600px;
  margin-top: 50px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.075);
  background-color: white;
`;

const AccountContainer = styled.div`
  max-width: 630px;
  max-width: 230px;
  min-height: 600px;

  margin-left: 2%;
  margin-right: 2%;
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
