import * as actions from '../actions/actionTypes'

export default function reducer(state = [], action) {
    switch(action.type) {
        case (actions.SET_USER):
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}