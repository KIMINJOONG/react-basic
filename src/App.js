import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import PracticeSetState from './PracticeSetState';

class App extends Component {

  render() {
    
    return (
      <div>
        <MyName name="인중"/>
        <Counter />
        <PracticeSetState />
      </div> 
    );
  }
}

export default App;
