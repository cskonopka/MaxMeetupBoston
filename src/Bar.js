import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Bar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fluid widths={4}>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}>
                    MaxMeetupBoston
          </Menu.Item>
            </Menu>
        )
    }
}