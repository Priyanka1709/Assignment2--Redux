import * as actions from './actions'
import * as actionTypes from '../constants/actionTypes'

describe('actions', () => {
    it('should create an action to fetch all cards', () => {
        const expectedAction = {
            type: actionTypes.FETCH_CARDS,
        }
        expect(actions.fetchCards()).toEqual(expectedAction)
    })

    it('should create an action to fetch details of a card', () => {
        const id = "8";
        const expectedAction = {
            type: actionTypes.FETCH_CARD_DETAIL,
            value: id,
        }
        expect(actions.fetchCardDetail(id)).toEqual(expectedAction)
    })
    
    it('should create an action to post details of a card', () => {
        const id = "8";
        const data= {
            name:'Test location',
        }
        const expectedAction = {
            type: actionTypes.POST_CARD_DETAIL,
            id,
            value: data
        }
        expect(actions.postCardDetail(id, data)).toEqual(expectedAction)
    })
})
