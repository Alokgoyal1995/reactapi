import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> hjx</h1>
          <Postform />
          <hr></hr>
          <Posts />
        </header>
      </div >

    );
  }
}

export default App;
