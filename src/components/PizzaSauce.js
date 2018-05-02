import React, {Component} from 'react';
import {connect} from 'react-redux'
import {sauce} from '../constants'
import GetSelectedSauce from '../actions/GetSelectedSauce'
import '../styles/PizzaStyle.css'

class PizzaSauce extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)

        this.state = {}
    }

    /**
     * Function to handle Sauce selection event
     * @param event the event object
     */
    handleChange(event) {

        this.setState({id: event.target.key, name: event.target.title, price: event.target.value})

        this
            .props
            .GetSelectedSauce(event.target.title, event.target.value)
    }

    render() {
        return (
            <div>
                <label className="sauce-label">Select your Sauce</label>
                <div>
                    <br/>
                    <table className="pizzaSauce">
                        <thead>
                            <tr>
                                <th></th>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {sauce.map(pizzasauce => {
                            return (
                                <tbody>
                                    <tr key={pizzasauce.id}>
                                        <td >
                                            <input
                                                key={pizzasauce.id}
                                                value={pizzasauce.price}
                                                title={pizzasauce.name}
                                                name={'sauce'}
                                                type={'radio'}
                                                onChange={this.handleChange}/></td>

                                        <td>{pizzasauce.id}</td>
                                        <td>{pizzasauce.name}</td>
                                        <td>&euro; {pizzasauce.price}</td>
                                    </tr>
                                </tbody>
                            )
                        })
}
                    </table>
                </div>
            </div>
        )
    }
}

export default connect(null, {GetSelectedSauce})(PizzaSauce)