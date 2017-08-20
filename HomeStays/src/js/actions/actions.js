import * as actionTypes from '../constants/actionTypes';

export function fetchCards() {
    return {
        type: actionTypes.FETCH_CARDS,
    }
}

export function fetchCardDetail(id) {
    return {
        type: actionTypes.FETCH_CARD_DETAIL,
        value: id,
    }
}