/**
 * NavigationBar
 */

// Package Imports //
import React from 'react';
import styled from 'styled-components';
// import { Search, Button } from 'semantic-ui-react';
import { Menu, Input, Search, Button, Popup, Grid } from 'semantic-ui-react';

// Component Imports //

export function NavigationBar() {
  let activeItem = 'home';
  let popupTrigger = <ProfilePic src="logo512.png" alt="none" />;
  return (
    <Body>
      <Menu secondary>
        <Menu.Menu position="left">
          <Logo src="inployd_logo_v2.PNG" alt="none" />
        </Menu.Menu>
        <Menu.Item name="Home" icon={'home'} active={activeItem === 'home'} />
        <Menu.Item
          name="Discover"
          icon={'map'}
          active={activeItem === 'discover'}
        />
        <Menu.Item
          name="Jobs"
          icon={'suitcase'}
          active={activeItem === 'jobs'}
        />
        <Menu.Item
          name="Notifications"
          icon={'lightbulb'}
          active={activeItem === 'notifications'}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            {/* <Input style={{paddingRight: '12.671429em !important', marginLeft: '140px'}} icon="search" placeholder="Search..." /> */}
            <Search />
          </Menu.Item>
          <Popup trigger={popupTrigger} flowing hoverable>
            <Button basic color="red">
              Logout
            </Button>
            <Button basic>Settings</Button>
          </Popup>
        </Menu.Menu>
      </Menu>
    </Body>
  );
}

const Body = styled.div`
  padding: 18px 170px 18px 100px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
  height: 90px;
  width: 100%;
<<<<<<< feature/nicholas.arnold/sign-up-page
  background-color: aquamarine;
  // -webkit-box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  // -moz-box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  // box-shadow: 0px 11px 32px -7px rgba(0, 0, 0, 0.47);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.075);
  display: flex;
  justify-content: center;

  //border: solid orange;
=======
  background-color: #f0f9ff;
>>>>>>> feat: Redone Navigation Bar
`;

const ProfilePic = styled.img`
  width: 43px;
  height: 43px;
  border: 2.5px white solid;
  border-radius: 6px;
  margin: auto 0 auto 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.045), 0 2px 4px 0 rgba(0, 0, 0, 0.045);
  color: #white;
`;

const Logo = styled.img`
  height: 56px;
  width: 104px;
  display: block;
  margin-right: 40px;
`;
