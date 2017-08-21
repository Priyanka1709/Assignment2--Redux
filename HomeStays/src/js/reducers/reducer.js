import * as actionTypes from '../constants/actionTypes';
import _ from 'lodash';

const initialState = {
    cards: null,
    fetchingData: false,
    cardDetail: null,
    error: null,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.FETCHING:
            console.log('priyanka',state)
            return _.assign({}, state, { fetchingData: true });

        case actionTypes.FETCH_CARDS_SUCCESS:
            return _.assign({}, state, { cards: action.value }, { fetchingData: false });

        case actionTypes.FETCH_CARD_DETAIL_SUCCESS:
            return _.assign({}, state, { cardDetail: action.value }, { fetchingData: false });

        case actionTypes.FETCH_CARDS_ERROR:
        case actionTypes.FETCH_CARD_DETAIL_ERROR:
        case actionTypes.POST_CARD_DETAIL_ERROR:
            return _.assign({}, state, { error: action.value });

        default:
            return state;
    }
}
