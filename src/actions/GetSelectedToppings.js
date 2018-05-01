import {UPDATE_TOPPINGS} from './types'

export default function GetSelectedToppings(selectedvalue) {

    return {type: UPDATE_TOPPINGS, payload: selectedvalue}

}