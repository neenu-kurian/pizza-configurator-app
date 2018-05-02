import React, {Component} from 'react';
import {connect} from 'react-redux'
import TurboChecked from '../actions/TurboDelivery'

 class TurboDroneDelivery extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state = {
            turbochecked: true
        }

    }

    /**
     * Function to handle turbo delivery event
     * @param event the event object 
     */
    handleChange(event) {

        this.setState(turbochecked => ({
            turbochecked: !this.state.turbochecked
        }))

       this.props.TurboChecked(this.state.turbochecked)
    }

    render() {

        return (
            <div>
                <label className="base-label">Turbo Drone Delivery?</label>
                <input type={'checkbox'} onChange={this.handleChange}/>

            </div>
        )
    }
}

export default connect (null,{TurboChecked})(TurboDroneDelivery)