/**
 * Footer
 */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
import { Icon, Grid } from 'semantic-ui-react';

// Component Imports //

export function Footer() {
  return (
    <Background>
      <Base>
        {/*<TitleBox>*/}
        {/*  <u>*/}
        {/*    <h2>inployd</h2>*/}
        {/*  </u>*/}
        {/*</TitleBox>*/}
        <ContentBox>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">About Us</a>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">Feedback</a>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">Support</a>
                </h3>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">Privacy Policy</a>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">Terms Of Service</a>
                </h3>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.example.com">Cookie Policy</a>
                </h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ContentBox>
        <CopyrightBox>
          <h3>2020 inployd</h3>
          <Icon name={'copyright'} />
        </CopyrightBox>
      </Base>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(white, aquamarine);
  display: flex;
  justify-content: center;
  //border: solid orange;
`;

const Base = styled.div`
  display: flex;
  flex: 1;
  justify-items: center;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  //border: solid red;
`;

// const TitleBox = styled.div`
//   margin: 1em;
//   display: flex;
//   flex-direction: row;
//   //border: solid black;
// `;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
  //border: solid blue;
`;

const CopyrightBox = styled.div`
  display: flex;
  justify-content: center;
  //border: solid magenta;
`;
