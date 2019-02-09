import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Weather />

      </div>
    );
  }
}

export default App;
