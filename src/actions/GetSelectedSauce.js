import {UPDATE_SAUCE} from './types'

export default function GetSelectedSauce(selectedvalue) {
    
    return {type: UPDATE_SAUCE, payload: selectedvalue}

}