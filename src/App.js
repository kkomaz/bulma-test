import React, { Component } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="primary">
          Primary color
        </Button>
      </div>
    );
  }
}

export default App;
