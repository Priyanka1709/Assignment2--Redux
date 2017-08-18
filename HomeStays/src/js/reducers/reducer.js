import * as actionTypes from "../constants/actionTypes";

const initialState= {
    cards: null,
    fetchingData: false,
    cardDetail: null
}

export default function appReducer(state= initialState, action){
    switch(action.type){
        case actionTypes.FETCHING:
            return Object.assign({}, ...state, {fetchingData: true});
        case actionTypes.FETCH_CARDS_SUCCESS:
            return Object.assign({}, ...state, {cards: action.value}, {fetchingData: false});
        case actionTypes.FETCH_CARD_DETAIL_SUCCESS:
            return Object.assign({}, ...state, {cardDetail: action.value}, {fetchingData: false});
		default:
			return state;
	}
}