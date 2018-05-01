import {UPDATE_BASE} from './types'

export default function GetSelectedBase(selectedbase,price) {

    return {type: UPDATE_BASE, payload: {selectedbase,price}}

}