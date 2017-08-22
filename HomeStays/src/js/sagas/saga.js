import { call, put, takeEvery, race, all } from 'redux-saga/effects';

import * as actionTypes from '../constants/actionTypes';
import apiHelper from '../common/apiHelper';

export default function* rootSaga() {
    yield all([
        watchActions(),
    ]);
}

function* watchActions() {
    yield takeEvery(actionTypes.FETCH_CARDS, fetchCards);
    yield takeEvery(actionTypes.FETCH_CARD_DETAIL, fetchCardDetail);
    yield takeEvery(actionTypes.POST_CARD_DETAIL, postCardDetail);
}

function timer(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(true);
        }, t);
    });
}

function* fetchCards() {
    yield put({ type: actionTypes.FETCHING });
    const { data, timeout } = yield race({ data: call(() => apiHelper.getAllCards()), timeout: timer(5000) });

    if (data) {
        yield put({ type: actionTypes.FETCH_CARDS_SUCCESS, value: data });
    } else if (timeout) {
        yield put({ type: actionTypes.FETCH_CARDS_ERROR, value: 'Error while fetching cards' });
    }
}

function* fetchCardDetail(action) {
    const id = action.value;
    yield put({ type: actionTypes.FETCHING });

    const { data, timeout } = yield race({ data: call(() => apiHelper.getCardDetails(id)), timeout: timer(5000) });

    if (data) {
        yield put({ type: actionTypes.FETCH_CARD_DETAIL_SUCCESS, value: data });
    } else if (timeout) {
        yield put({ type: actionTypes.FETCH_CARD_DETAIL_ERROR, value: 'Error while fetching card details' });
    }
}

function* postCardDetail(action) {
    const { data, timeout } = yield race({ data: call(() => apiHelper.postCardDetails(action.id, action.value)), timeout: timer(5000) });

    if (data) {
        yield put({ type: actionTypes.POST_CARD_DETAIL_SUCCESS, value: data });
    } else if (timeout) {
        yield put({ type: actionTypes.POST_CARD_DETAIL_ERROR, value: 'Error while posting card details' });
    }
}
