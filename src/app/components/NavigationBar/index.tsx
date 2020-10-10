/**
 * NavigationBar
 */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
import { Search, Button } from 'semantic-ui-react';

// Component Imports //

export function NavigationBar() {
  return (
    <Background>
      <Base>
        <LeftContent>
          <IconClickable>
            <i
              className="huge info card icon"
              style={{
                display: 'flex',
                alignSelf: 'center',
              }}
            />
          </IconClickable>
          <Search />
        </LeftContent>

        <RightContent>
          <IconClickable>
            <Button circular size={'huge'} icon={'home'} />
          </IconClickable>

          <IconClickable>
            <Button circular size={'huge'} icon={'briefcase'} />
          </IconClickable>

          <IconClickable>
            <Button circular size={'huge'} icon={'bell'} />
          </IconClickable>

          <IconClickable>
            <Button circular size={'huge'} icon={'meh'} />
          </IconClickable>
        </RightContent>
      </Base>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 5em;
  width: 100%;
  background-color: aquamarine;
  // -webkit-box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  // -moz-box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  // box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
  display: flex;
  justify-content: center;

  //border: solid orange;
`;

const Base = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
  margin-left: 15%;
  margin-right: 15%;

  //border: solid red;
`;

const LeftContent = styled.div`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: center;

  //border: solid lightcoral;
`;

const RightContent = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  //border: solid lawngreen;
`;

const IconClickable = styled.div`
  display: flex;
  flex-direction: column;

  //border: solid blue;
`;
