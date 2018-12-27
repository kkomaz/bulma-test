import React, { Component } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns'
import './App.sass';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Gapless</h1>
          <Columns gapless>
            <Columns.Column size={1}>
              <p className="bd-notification is-success">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-info">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-warning">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-danger">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-white">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-light">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-dark">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-black">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-dark">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-light">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-white">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-danger">size-1</p>
            </Columns.Column>
          </Columns>
        </div>
        <div>
          <h1>Not Gapless</h1>
          <Columns>
            <Columns.Column size={1}>
              <p className="bd-notification is-success">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-info">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-warning">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-danger">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-white">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-light">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-dark">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-black">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-dark">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-light">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-white">size-1</p>
            </Columns.Column>
            <Columns.Column size={1}>
              <p className="bd-notification is-danger">size-1</p>
            </Columns.Column>
          </Columns>
        </div>
      </div>
    );
  }
}

export default App;
