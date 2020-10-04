/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { Menu, Input, Button, Popup } from 'semantic-ui-react';
import './Header.scss';

interface Props {}

export const Header = memo((props: Props) => {
  let activeItem = 'home';
  return (
    <div className="header">
      <Menu secondary>
        <Menu.Item name="Home" active={activeItem === 'home'} />
        <Menu.Item name="Discover" active={activeItem === 'discover'} />
        <Menu.Item name="Messages" active={activeItem === 'messages'} />
        <Menu.Item
          name="Notifications"
          active={activeItem === 'notifications'}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Popup
            trigger={<img src="logo512.png" alt="none"></img>}
            flowing
            hoverable
          >
            <Button basic color="red">
              Logout
            </Button>
            <Button basic>Settings</Button>
          </Popup>
        </Menu.Menu>
      </Menu>
    </div>
  );
});
