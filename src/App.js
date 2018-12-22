import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'injoong!';
    const value = 1;
    return (
      <div>
        {
          (() => {
            if(value === 1) return <div>1이다!</div>
            if(value === 2) return <div>2다!</div>
            if(value === 3) return <div>3이다!</div>
            return <div>없다</div>
          })()
        }
      </div>
      
    );
  }
}

export default App;
