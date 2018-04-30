import {UPDATE_SAUCE} from './types'

export default function GetSelectedBase(selectedvalue) {
    
    return {type: UPDATE_SAUCE, payload: selectedvalue}

}