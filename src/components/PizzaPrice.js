import React, {Component} from 'react';
import {connect} from 'react-redux'

class PizzaPrice extends Component {

    render() {

        const price = Number(this.props.PizzaSelected.baseprice) + Number(this.props.PizzaSelected.sauceprice) + Number(this.props.PizzaSelected.toppings.length * 0.50)
        const turborprice = (0.1 * (Number(this.props.PizzaSelected.baseprice) + Number(this.props.PizzaSelected.sauceprice) + Number(this.props.PizzaSelected.toppings.length * 0.50)))

        return (
            <div>
                <label className="price">Price</label>
                {(this.props.PizzaSelected.turbodelivery)
                    ? <input className="priceinput" value={Number(price + turborprice).toFixed(2)} type={'text'}/>
                    : <input className="priceinput" value={price} type={'text'}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {PizzaSelected: state.PizzaSelected}
}

export default connect(mapStateToProps)(PizzaPrice)
