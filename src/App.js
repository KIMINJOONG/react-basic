import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black'
      , padding: '16px'
      , color: 'white'
      , fontSize: '12px'
    };
    return (
      <div className="App">
        {/*주석은 이렇게*/ }
        <h1 // 태그사이에
        >리액트</h1>
      </div>      
    );
  }
}

export default App;
