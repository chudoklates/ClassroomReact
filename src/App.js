import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Classroom from './Classroom/Classroom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to my swamp</h1>
        </header>
        <main>
          <Classroom />
        </main>
      </div>
    );
  }
}

export default App;
