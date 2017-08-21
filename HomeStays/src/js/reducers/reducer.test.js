import reducer from './reducer';
import * as actionTypes from '../constants/actionTypes';

describe("reducer", () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cards: null,
            fetchingData: false,
            cardDetail: null,
            error: null,
        })
    })

    it('should handle FETCHING', () => {
        expect(reducer(undefined, {
            type: actionTypes.FETCHING
        })).toEqual({
            cards: null,
            fetchingData: true,
            cardDetail: null,
            error: null,
        })
    })

    it('should handle FETCH_CARDS_SUCCESS', () => {
        expect(reducer(undefined, {
            type: actionTypes.FETCH_CARDS_SUCCESS,
            value: {
                "name": "Jaipur | Souvenir Peppermint"
            }
        })).toEqual({
            cards: {
                "name": "Jaipur | Souvenir Peppermint"
            },
            fetchingData: false,
            cardDetail: null,
            error: null,
        })
    })

    it('should handle FETCH_CARD_DETAIL_SUCCESS', () => {
        expect(reducer(undefined, {
            type: actionTypes.FETCH_CARD_DETAIL_SUCCESS,
            value: {
                "name": "Jaipur | Souvenir Peppermint"
            }
        })).toEqual({
            cards: null,
            fetchingData: false,
            cardDetail: {
                "name": "Jaipur | Souvenir Peppermint"
            },
            error: null,
        })
    })

    it('should handle FETCH_CARDS_ERROR', () => {
        expect(reducer(undefined, {
            type: actionTypes.FETCH_CARDS_ERROR,
            value: 'Error while fetching cards'
        })).toEqual({
            cards: null,
            fetchingData: false,
            cardDetail: null,
            error: 'Error while fetching cards',
        })
    })

    it('should handle FETCH_CARD_DETAIL_ERROR', () => {
        expect(reducer(undefined, {
            type: actionTypes.FETCH_CARD_DETAIL_ERROR,
            value: 'Error while fetching card details'
        })).toEqual({
            cards: null,
            fetchingData: false,
            cardDetail: null,
            error: 'Error while fetching card details',
        })
    })

    it('should handle POST_CARD_DETAIL_ERROR', () => {
        expect(reducer(undefined, {
            type: actionTypes.POST_CARD_DETAIL_ERROR,
            value: 'Error while posting card details'
        })).toEqual({
            cards: null,
            fetchingData: false,
            cardDetail: null,
            error: 'Error while posting card details',
        })
    })
})
