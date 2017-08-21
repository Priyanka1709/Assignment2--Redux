import reducer from './reducer';
import * as actionTypes from '../constants/actionTypes';

describe("reducer", () => {
    // it('should return the initial state', () => {
    //     expect(reducer(undefined, {})).toEqual({
    //         cards: null,
    //         fetchingData: false,
    //         cardDetail: null,
    //         error: null,
    //     })
    // })

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

    // it('should handle FETCH_CARDS_SUCCESS', () => {
    //     expect(reducer(undefined, {
    //         type: actionTypes.FETCH_CARDS_SUCCESS,
    //         value: {
    //             "name": "Jaipur | Souvenir Peppermint"
    //         }
    //     })).toEqual({
    //         cards: {
    //             "name": "Jaipur | Souvenir Peppermint"
    //         },
    //         fetchingData: false,
    //         cardDetail: null,
    //         error: null,
    //     })
    // })
})
