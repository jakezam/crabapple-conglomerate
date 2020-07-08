import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class HomeHeader extends React.Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary>
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
    );
  }
}
