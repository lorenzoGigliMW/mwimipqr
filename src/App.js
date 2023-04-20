import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  getMenu = () => {
    this.props.getMenu()
  }

  agileInstantByIndex = () => {
    this.props.agileInstantByIndex()
  }

  agileDossierByStock = () => {
    this.props.agileDossierByStock()
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
};
export default App;
