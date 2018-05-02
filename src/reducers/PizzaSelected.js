import {UPDATE_BASE} from '../actions/types'
import {UPDATE_SAUCE} from '../actions/types'
import {UPDATE_TOPPINGS} from '../actions/types'
import {DELIVERY} from '../actions/types'

const initialState = {
    base: " ",
    sauce: " ",
    toppings:"",
    baseprice:" ",
    sauceprice:" ",
    turbodelivery:false
 

}

export default function (state = initialState, {type, payload}) {
 
    switch (type) {
        case UPDATE_BASE:
            {

                return {
                    ...state,
                    base: payload.selectedbase,
                    baseprice:payload.price
                }
            }

        case UPDATE_SAUCE:
            {
                return {
                    ...state,
                    sauce: payload.selectedsauce,
                    sauceprice:payload.price
                }
            }

        case UPDATE_TOPPINGS:
            {
                return {
                    ...state,
                    toppings: payload,
                    
                }
            }

            case DELIVERY:
            {
                return{
                    ...state,
                    turbodelivery:payload
                }
            }
        default:
            return state
    }
}