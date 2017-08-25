import * as saga from './saga';
import * as actionTypes from '../constants/actionTypes';
import { call, put, takeEvery, race, all } from 'redux-saga/effects';
import apiHelper from '../common/apiHelper';

describe('saga', () => {
    let timer;
    beforeAll(() => {
        timer = jest.fn().mockReturnValue(new Promise(function () {}));
    })

    describe('test fetchCards', () => {
        let fetchCards;

        beforeAll(() => {
            fetchCards = saga.fetchCards();

            apiHelper.getAllCards = jest.fn();
        })

        it('should have dispatched fetching action', () => {
            expect(fetchCards.next().value).toEqual(put({
                type: actionTypes.FETCHING
            }));
        })

        it('should have called the api', () => {
            expect(JSON.stringify(fetchCards.next().value)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.getAllCards()),
                timeout: timer()
            })));
        })
    })

    describe('test fetchCardDetail', () => {
        let fetchCardDetail;
        const action = {
            value: '1'
        };

        beforeAll(() => {
            fetchCardDetail = saga.fetchCardDetail(action);

            apiHelper.getCardDetails = jest.fn();
        })

        it('should have dispatched fetching action', () => {
            expect(fetchCardDetail.next().value).toEqual(put({
                type: actionTypes.FETCHING
            }));
        })

        it('should have called the api', () => {
            expect(JSON.stringify(fetchCardDetail.next().value)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.getCardDetails()),
                timeout: timer()
            })));
        })
    })

    describe('test postCardDetail', () => {
        let postCardDetail;
        const action = {
            id: '1',
            value: {
                location: 'Jaipur'
            }
        };

        beforeAll(() => {
            postCardDetail = saga.postCardDetail(action);

            apiHelper.postCardDetails = jest.fn();
        })

        it('should have called the api', () => {
            expect(JSON.stringify(postCardDetail.next().value)).toEqual(JSON.stringify(race({
                data: call(() => apiHelper.postCardDetail()),
                timeout: timer()
            })));
        })
    })
})
