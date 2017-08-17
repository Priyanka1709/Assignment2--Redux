import * as actionTypes from '../constants/actionTypes';

export function fetchCards(){
    return {
        type: actionTypes.FETCH_CARDS,
    }
}