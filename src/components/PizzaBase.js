import React, {Component} from 'react';
import {connect} from 'react-redux'
import {base} from '../constants'
import GetSelectedBase from '../actions/GetSelectedBase'

class PizzaBase extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
    }

    handleChange(e) {

        this.props.GetSelectedBase(e.target.title)
        
    }

    render() {
        return (

            <div>

            <label className="base-label">Select your base</label>
            

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
                                                    onChange={this.handleChange}/></td>

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



export default connect(null,{GetSelectedBase})(PizzaBase)