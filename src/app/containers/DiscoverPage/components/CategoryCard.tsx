/**
 *
 * Category Card
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Card, Popup } from 'semantic-ui-react';

interface IProps {
  key: number;
  category: string;
}

export function CategoryCard(props: IProps) {
  return (
    <Body>
      <Popup />
    </Body>
  );
}

const Body = styled.div``;
