import React, {Component} from 'react';
import './App.css';
import PizzaForm from './components/PizzaForm'
import PizzaPrice from './components/PizzaPrice'
import './styles/PizzaStyle.css'

class App extends Component {

  handleSubmit() {
    alert('Your order is successfully placed')
    window
      .location
      .reload()
  }

  render() {
    return (
      <div className="App">

        <img
          style={{
          width: '1800px',
          height: '400px'
        }}
          alt='pizza'
          src="https://www.cumberlandfarms.com/media/2776/pizza-pull.png"/>

        <h1 className="App-title">Welcome to NewAgePizza</h1>

        <PizzaForm/>
        <PizzaPrice/>
        <br/>
        <button className="submitbutton" onClick={this.handleSubmit}>PLACE ORDER</button>
      </div>
    );
  }
}

export default App;
