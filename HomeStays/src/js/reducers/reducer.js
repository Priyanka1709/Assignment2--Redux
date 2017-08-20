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
            return _.assign({}, ...state, { fetchingData: true });

        case actionTypes.FETCH_CARDS_SUCCESS:
            return _.assign({}, ...state, { cards: action.value }, { fetchingData: false });

        case actionTypes.FETCH_CARD_DETAIL_SUCCESS:
            return _.assign({}, ...state, { cardDetail: action.value }, { fetchingData: false });

        case actionTypes.FETCH_CARDS_ERROR:
        case actionTypes.FETCH_CARD_DETAIL_ERROR:
            return _.assign({}, ...state, { error: 'Error encountered while fetching data' });

        default:
            return state;
    }
}
