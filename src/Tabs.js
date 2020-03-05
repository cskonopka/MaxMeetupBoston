import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';

export default class Tabs extends Component {
    state = { activeItem: 'Schedule' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item
              name='Schedule'
              active={activeItem === 'Schedule'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Mission Statement'
              active={activeItem === 'Mission Statement'}
              onClick={this.handleItemClick}
            />
          <Menu.Item
              name='photos'
              active={activeItem === 'photos'}
              onClick={this.handleItemClick}
            />
          </Menu>
  
          <Segment attached='bottom'>
            
          </Segment>
        </div>
      )
    }
}