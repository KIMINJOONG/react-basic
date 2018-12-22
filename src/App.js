import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'injoong!';
    return (
      <div>
        {
          name === 'injoong!' && <div>인중이다!</div>
        }
      </div>
      
    );
  }
}

export default App;
