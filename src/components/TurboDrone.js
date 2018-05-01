import React, {Component} from 'react';

export default class TurboDroneDelivery extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state = {
            turbochecked: true
        }

    }

    handleChange(e) {

        this.setState(turbochecked => ({
            turbochecked: !this.state.turbochecked
        }))

        
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


