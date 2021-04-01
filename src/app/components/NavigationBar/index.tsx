/**
 * NavigationBar
 */

import React from 'react';
import { Button, Menu, Popup, Search } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Body, Logo, ProfilePic } from './components/StyledComponents';

export function NavigationBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  let currActive = history.location.pathname.substring(1);
  let slashIndex = currActive.indexOf('/');
  if (slashIndex >= 0) {
    currActive = currActive.substring(0, slashIndex);
  }

  const [activeItem, setActive] = React.useState(currActive);

  let popupTrigger = <ProfilePic src="logo512.png" alt="none" />;
  return (
    <Body>
      <Menu secondary>
        <Menu.Menu position="left">
          <Logo src="inployd_logo_v2.PNG" alt="none" />
        </Menu.Menu>
        <Menu.Item
          name="Discover"
          icon={'map'}
          active={activeItem === 'discover'}
          onClick={(e, { name }) => {
            setActive('discover');
            dispatch(push('/discover'));
          }}
        />
        <Menu.Item
          name="Consultations"
          icon={'address card'}
          active={activeItem === 'consultations'}
          onClick={(e, { name }) => {
            dispatch(push('/consultations'));
          }}
        />
        <Menu.Item
          name="Notifications"
          icon={'lightbulb'}
          active={activeItem === 'notifications'}
          onClick={(e, { name }) => {
            setActive('notifications');
            dispatch(push('/notifications'));
          }}
        />
        <Menu.Item
          name="My Profile"
          icon={'user'}
          active={activeItem === 'profile'}
          onClick={(e, { name }) => {
            setActive('profile');
            dispatch(push('/profile/ac784650-a769-40a1-8a67-08d8ce2fd834'));
          }}
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
