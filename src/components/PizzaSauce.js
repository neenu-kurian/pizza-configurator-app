import React, {Component} from 'react';
import {connect} from 'react-redux'
import {sauce} from '../constants'
import GetSelectedSauce from '../actions/GetSelectedSauce'

class PizzaSauce extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)

        this.state = {}
    }

    handleChange(e) {

        this.setState({id: e.target.key, name: e.target.title, price: e.target.value})

        this
            .props
            .GetSelectedSauce(e.target.title,e.target.value)
    }

    render() {
        console.log(this.state.price)
        return (

            <div>

                <label className="base-label">Select your Sauce</label>

                <div>
                    <br/>
                    <table className="table-style-three">
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
                                        <td>&euro; {pizzasauce.price}.00</td>
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