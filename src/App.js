import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaForm from './components/PizzaForm'
import PizzaPrice from './components/PizzaPrice'
  

class App extends Component {
  render() {
    return (
      <div>
      <PizzaForm />
      <PizzaPrice />
      </div>
    );
  }
}

export default App;
