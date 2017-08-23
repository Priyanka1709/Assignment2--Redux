import * as saga from './saga';
import * as actionTypes from '../constants/actionTypes';
import { call, put, takeEvery, race, all } from 'redux-saga/effects';
import apiHelper from '../common/apiHelper';

describe('saga', () => {
    describe('test fetchCards', () => {
        let fetchCards;
        let timer;

        beforeAll(() => {
            fetchCards = saga.fetchCards();
            
            apiHelper.getAllCards = jest.fn();

            timer= jest.fn().mockReturnValue(new Promise(function(resolve) {
                setTimeout(function() {
                    resolve(true);
                }, t);
            }));
        })

        it('testing fetchCards first yield statement', () => {
            expect(fetchCards.next().value).toEqual(put({ type: actionTypes.FETCHING }));
        })

        it('testing fetchCards second yield statement', () => {
            expect(fetchCards.next().value).toEqual(race({ data: call(() => apiHelper.getAllCards()), timeout: timer(5000) }));
        })
    })    
})
