import sagaHelper from 'redux-saga-testing';
import * as saga from './saga';
import * as actionTypes from '../constants/actionTypes';
import { call, put, takeEvery, race, all } from 'redux-saga/effects';
import apiHelper from '../common/apiHelper';

describe('saga', () => {
    describe('test fetchCards', () => {
        let timer;
        let it= sagaHelper(saga.fetchCards());;

        beforeAll(() => {  
            apiHelper.getAllCards = jest.fn().mockReturnValue(true);
            timer = jest.fn().mockImplementation(() => new Promise(function (resolve) {}));
        })

        it('should have dispatched fetching action', result=>{
            expect(result).toEqual(put({
                type: actionTypes.FETCHING
            }));
        })

        it('should have called the api', result => {
            expect(JSON.stringify(result)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.getAllCards()),
                timeout: timer()
            })));
            return {name: 'Jaipur'};
        })

        it('should dispatch success message', result=> {
            expect(result).toEqual({ type: actionTypes.FETCH_CARDS_SUCCESS, value: true });
        })

        // it('testing fetchCards third yield statement', () => {
        //     let fetchCards = saga.fetchCards();
        //     apiHelper.getAllCards = jest.fn(true);

        //     expect(fetchCards.next().value).toEqual(put({
        //         type: actionTypes.FETCHING
        //     }));
        // })
    })
})
