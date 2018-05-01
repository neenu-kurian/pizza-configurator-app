import React, {Component} from 'react';
import {connect} from 'react-redux'

export default class PizzaPrice extends Component{


render() {
    
    return (
        <div>
        <label className="price">Price</label>
        <input className="priceinput" value={" "} type={'text'}/>
        </div>
    )
 }
}

