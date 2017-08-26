import React, { Component } from 'react';

import AddInvoiceContainer from './components/AddInvoiceContainer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Invoice Transaction App based on React</h1>
          </div>
          <AddInvoiceContainer />
        </div>
    );
  }
}

export default App;
