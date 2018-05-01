import React, {Component} from 'react';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaCheckBox from './PizzaCheckBox'
import {connect} from 'react-redux'
import GetSelectedToppings from '../actions/GetSelectedToppings'

class PizzaForm extends Component{


render() {
    console.log("inside form")
    return (
        <form className="container" >
            <h3>Select your Pizza!!!!</h3>
            <br/>
           
            <PizzaBase/>
            <br/>
            <PizzaSauce />
            <br/>
            <PizzaCheckBox  />
            </form>
    )}
}

export default connect (null,{GetSelectedToppings})(PizzaForm)