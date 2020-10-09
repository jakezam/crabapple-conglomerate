/**
 * Homepage
 */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <Base>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage</title>
      </Helmet>
      <CenterBox>
        <Title>
          <h1>inployed</h1>
          <h4>A better way to work</h4>
        </Title>
        <ButtonContainer>
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
        </ButtonContainer>
      </CenterBox>
    </Base>
  );
}

const Base = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const CenterBox = styled.div`
  border: 5px solid black;
  border-radius: 10px;
`;

const Title = styled.div`
  margin: 5em;
  display: flex;

  //border: 5px solid red;
  //border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;

  //border: 5px solid orange;
  //border-radius: 10px;
`;
