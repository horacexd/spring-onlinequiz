import * as actions from './actionTypes';

export const setUser = user => ({
    type: actions.SET_USER,
    payload: {
        user
    }
})