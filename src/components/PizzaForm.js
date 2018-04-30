import React, {Component} from 'react';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'

class PizzaForm extends Component{


render() {
    return (
        <form className="container" >
            <h3>Select your Pizza!!!!</h3>
            <br/>
           
            <PizzaBase/>
            <br/>
            <PizzaSauce />
            </form>
    )}
}

export default PizzaForm