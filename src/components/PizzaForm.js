import React, {Component} from 'react';
import PizzaBase from './PizzaBase'

class PizzaForm extends Component{


render() {
    return (
        <form className="container" >
            <h3>Select your Pizza!!!!</h3>
            <br/>
            <PizzaBase/>
            </form>
    )}
}

export default PizzaForm