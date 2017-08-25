import sagaHelper from 'redux-saga-testing';
import * as saga from './saga';
import * as actionTypes from '../constants/actionTypes';
import { call, put, takeEvery, race, all } from 'redux-saga/effects';
import apiHelper from '../common/apiHelper';


describe('saga', () => {
    let timer
    beforeAll(() => {
        timer = jest.fn().mockImplementation(() => new Promise(function (resolve) {}));
    })
    describe('test fetchCards', () => {
        let it = sagaHelper(saga.fetchCards());;

        beforeAll(() => {
            apiHelper.getAllCards = jest.fn().mockReturnValue(true);
        })

        it('should have dispatched fetching action', result => {
            expect(result).toEqual(put({
                type: actionTypes.FETCHING
            }));
        })

        it('should have called the api', result => {
            expect(JSON.stringify(result)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.getAllCards()),
                timeout: timer()
            })));
            return {
                name: 'Jaipur'
            };
        })
    })

    describe('test fetchCardDetail', () => {
        let it = sagaHelper(saga.fetchCardDetail());;

        beforeAll(() => {
            apiHelper.getCardDetails = jest.fn().mockReturnValue(true);
        })

        it('should have dispatched fetching action', result => {
            expect(result).toEqual(put({
                type: actionTypes.FETCHING
            }));
        })

        it('should have called the api', result => {
            expect(JSON.stringify(result)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.getAllCards()),
                timeout: timer()
            })));
            return {
                name: 'Jaipur'
            };
        })
    })
})
