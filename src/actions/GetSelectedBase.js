import {UPDATE_BASE} from './types'

export default function GetSelectedBase(selectedvalue) {
    
    return {type: UPDATE_BASE, payload: selectedvalue}

}