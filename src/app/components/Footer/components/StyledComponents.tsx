import styled from 'styled-components';

interface IsMobile {
  isMobile: boolean;
}

export const Container = styled.div<IsMobile>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  margin-left: ${props => (props.isMobile ? '' : 'auto')};
  margin-right: ${props => (props.isMobile ? '' : 'auto')};

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const TopBox = styled.div<IsMobile>`
  display: flex;
  flex: 0;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};

  // DEBUG STYLES //
  //border: 5px solid red;
`;

export const CopyrightBox = styled.div`
  display: flex;
  flex: 0;
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
