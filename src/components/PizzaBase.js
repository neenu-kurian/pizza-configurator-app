import React, {Component} from 'react';
import {connect} from 'react-redux'
import {base} from '../constants'

class PizzaBase extends Component {

    

    render() {
        return (

            <div>

            <label className="base-label">Select your base</label>
            <div>

                <table className="table-style-three">
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {
                        base.map(pizzabase=>{
                            return(
                                <tbody>
                                      <tr key={pizzabase.id}>
                                            <td >
                                                <input
                                                    key={pizzabase.id}
                                                    value={pizzabase.price}
                                                    title={pizzabase.name}
                                                    name={'name'}
                                                    type={'radio'}
                                                   /></td>

                                            <td>{pizzabase.id}</td>
                                            <td>{pizzabase.name}</td>
                                            <td>&euro; {pizzabase.price}.00</td>
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

export default PizzaBase