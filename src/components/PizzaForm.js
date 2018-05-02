import React, {Component} from 'react';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaCheckBox from './PizzaCheckBox'
import {connect} from 'react-redux'
import GetSelectedToppings from '../actions/GetSelectedToppings'
import TurboDrone from './TurboDrone'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class PizzaForm extends Component{


render() {
    return (
        <MuiThemeProvider>
        <form className="container" >
            <h3>Select your Pizza!!!!</h3>
            <br/>
           
            <PizzaBase/>
            <br/>
            <PizzaSauce />
            <br/>
            <PizzaCheckBox  />
            <br/>
            <TurboDrone />
            <br/>
         </form>
         </MuiThemeProvider>
    )}
}

export default connect (null,{GetSelectedToppings})(PizzaForm)