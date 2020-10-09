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
        <Menu.Item name="logo">
          <img
            style={{ height: '55px', width: '125px' }}
            src="black_inployd.png"
            alt="none"
          />
        </Menu.Item>
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
            trigger={
              <img
                style={{ height: '50px', width: '25px' }}
                src="blue_pine.png"
                alt="none"
              />
            }
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
