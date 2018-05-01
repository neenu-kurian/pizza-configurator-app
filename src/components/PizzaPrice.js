import React, {Component} from 'react';
import {connect} from 'react-redux'
import { TotalPrice } from '../constants';

 class PizzaPrice extends Component{


render() {
    
   

    return (
        <div>
        <label className="price">Price</label>
        <input className="priceinput" value={""} type={'text'}/>
        </div>
    )
 }
}

const mapStateToProps = (state) => {
    return {
      PizzaSelected:state.PizzaSelected
    }
  }

  
export default connect(mapStateToProps)(PizzaPrice)
