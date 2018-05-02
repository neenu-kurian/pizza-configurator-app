import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toppings} from '../constants'
import GetSelectedToppings from '../actions/GetSelectedToppings'
import RaiseButton from 'material-ui/RaisedButton'

/**
 * Toppings button style
 */
const buttonStyle = {
    margin: 12,
}

class PizzaCheckBox extends Component {
    constructor(props)
    {
        super(props)
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state = {
            checkedtoppings: [],
            checked: false
        }

    }

    handleChange(e) {

        if (this.state.checkedtoppings.length >= 3) {
            e.target.checked = false
        }

        if (e.target.checked === true) {
            this.setState({
                checkedtoppings: [
                    ...this.state.checkedtoppings,
                    e.target.value
                ],
                checked: e.target.checked
            })
        } else {
            const filterdarray = this
                .state
                .checkedtoppings
                .filter(eachtopping => eachtopping !== e.target.value)
            this.setState({checkedtoppings: filterdarray, checked: e.target.checked})

        }

    }

    handleSubmit(e) {
        e.preventDefault()

        this
            .props
            .GetSelectedToppings(this.state.checkedtoppings)

    }

    render() {

        return (

            <div>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <label className="base-label">Select your Toppings(maximum 3 allowed!)</label>

                    <div>
                        <br/> {toppings.map(pizzatopping => {
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

                    </div><br/>
                    <RaiseButton type="submit" label="Add Selected Toppings" primary={true} style={buttonStyle}/>
                </form>
            </div>
        )

    }
}

export default connect(null, {GetSelectedToppings})(PizzaCheckBox)