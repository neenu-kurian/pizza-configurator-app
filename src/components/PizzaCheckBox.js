import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toppings} from '../constants'
import GetSelectedToppings from '../actions/GetSelectedToppings'

class PizzaCheckBox extends Component {
    constructor(props)
    {
        super(props)
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state ={
            checkedtoppings:[],
            checked:false
         }

    }

    handleChange(e) {
       
        if(e.target.checked===true){
        this.setState(
            {checkedtoppings:[...this.state.checkedtoppings,e.target.value],
             checked:e.target.checked}
        )}
        else{
            const filterdarray=this.state.checkedtoppings.filter(eachtopping=>eachtopping!==e.target.value)
            this.setState({
                checkedtoppings:filterdarray,
                checked:e.target.checked
            })
           
        }
      
    }

    handleSubmit(e){
        e.preventDefault()
       
        this.props.GetSelectedToppings(this.state.checkedtoppings)
      
    }

    render() {
        console.log(this.state.checkedtoppings)
        console.log(this.state.checked)
        console.log(this)
        return (
            
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <label className="base-label">Select your Toppings</label>
               
                <div>
                <br/>
                    {
                        toppings.map(pizzatopping => {
                            return (

                                <label key={pizzatopping}>
                                    <input
                                        value={pizzatopping}
                                        type={'checkbox'}
                                        options={this.state.checkedvalue}
                                      
                                        onChange={this.handleChange}/>{pizzatopping}
                                </label>
                            )
                        })}

                </div>
                <button type="submit">Add Toppings</button>
</form>
            </div>
        )

        
    }
}



export default connect(null, {GetSelectedToppings})(PizzaCheckBox)