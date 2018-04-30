import {UPDATE_BASE} from '../actions/types'

const initialState = " "

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case UPDATE_BASE:
            return payload
        default:
            return state
    }
}