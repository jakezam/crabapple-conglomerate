/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import './Header.scss';

interface Props {}

export const Header = memo((props: Props) => {
  let activeItem = 'home';
  return (
    <div className="header">
      <Menu secondary>
        <Menu.Menu position="left">
          <Input icon="search" placeholder="Search..." />
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="discover"
            active={activeItem === 'discover'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === 'about'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="services"
            active={activeItem === 'services'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact us"
            active={activeItem === 'contact'}
            // onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
});
