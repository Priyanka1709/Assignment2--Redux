import * as actionTypes from "../constants/actionTypes";

const initialState= {
    cards: null
}

export default function appReducer(state= initialState, action){
    switch(action.type){
        case actionTypes.FETCH_CARDS_SUCCESS:
            return Object.assign({}, ...state, {cards: action.value});
		default:
			return state;
	}
}