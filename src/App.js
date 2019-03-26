import React, { Component } from 'react';
import Menu from 'react-bulma-components/lib/components/menu';
import './App.sass';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.List title="General">
            <Menu.List.Item>Dashboard</Menu.List.Item>
            <Menu.List.Item>Customer</Menu.List.Item>
          </Menu.List>
        </Menu>
        <Menu>
          <Menu.List title="General">
            <Menu.List.Item>
              <p>Dashboard (p tag) - NOT HOVERABLE</p>
            </Menu.List.Item>
            <Menu.List.Item>
              <p>Customer (p tag) - NOT HOVERABLE</p>
            </Menu.List.Item>
          </Menu.List>
        </Menu>

      </React.Fragment>
    )
  }
}

export default App;
