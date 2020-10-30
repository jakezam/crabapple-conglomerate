import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubStep } from '../../../../store/SignUp/selectors';
import styled from 'styled-components';
import { Step2dot1 } from './substeps/Step2dot1';
import { Step2dot2 } from './substeps/Step2dot2';
import { Step2dot3 } from './substeps/Step2dot3';
import { Step2dot4 } from './substeps/Step2dot4';
import { Step2dot5 } from './substeps/Step2dot5';

export function Step2() {
  // Hooks //
  const subStep = useSelector(selectSubStep);
  ///////////

  return (
    <Box>
      {subStep === 1 && <Step2dot1 />}
      {subStep === 2 && <Step2dot2 />}
      {subStep === 3 && <Step2dot3 />}
      {subStep === 4 && <Step2dot4 />}
      {subStep === 5 && <Step2dot5 />}
    </Box>
  );
}

const Box = styled.div`
  width: 30vw;
  padding: 10px;
`;
