import {UPDATE_BASE} from '../actions/types'
import {UPDATE_SAUCE} from '../actions/types'
import {UPDATE_TOPPINGS} from '../actions/types'

const initialState = {
    base: " ",
    sauce: " ",
    toppings: " ",
    turbo: " "
}

export default function (state = initialState, {type, payload}) {
    console.log("inside reducer")

    switch (type) {
        case UPDATE_BASE:
            {

                return {
                    ...state,
                    base: payload
                }
            }

        case UPDATE_SAUCE:
            {
                return {
                    ...state,
                    sauce: payload
                }
            }

            case UPDATE_TOPPINGS:{
                return{
                    ...state,
                    toppings:payload
                }
            }
        default:
            return state
    }
}