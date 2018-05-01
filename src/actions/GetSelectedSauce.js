import {UPDATE_SAUCE} from './types'

export default function GetSelectedSauce(selectedsauce,price) {

    return {type: UPDATE_SAUCE, payload: {selectedsauce,price}}

}