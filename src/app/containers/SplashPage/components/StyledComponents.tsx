import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

interface IsMobile {
  isMobile: boolean;
}

export const Container = styled.div`
  //position: absolute;
  //bottom: 0;
  display: flex;
  flex: 1;
  flex-direction: column;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const TopBox = styled.div<IsMobile>`
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const CopyrightBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 16px;

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const Segment = styled.div<IsMobile>`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.isMobile ? 'row' : 'column')};

  // DEBUG STYLES //
  //border: 5px solid red;
`;
