import react from "react";
import { call, put, takeEvery, race, all } from "redux-saga/effects";

import * as actionTypes from "../constants/actionTypes";
import { getAllCards } from "../common/apiHelper";

export default function* rootSaga(){
    yield all([
           watchActions()
        ]);
}

function* watchActions(){
    yield takeEvery(actionTypes.FETCH_CARDS, fetchCards);
}

function timer(t){
    return  new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(true);
        },t);  
    });   
}

function* fetchCards(){
    yield put({type: actionTypes.FETCHING})

    let {data, timeout}= yield race({ data: call(getAllCards), timeout: timer(5000)});

    if(data){
        yield put({type: actionTypes.FETCH_CARDS_SUCCESS, value: data});
    }
    else if(timeout){
        yield put({type: actionTypes.FETCH_CARDS_ERROR, value: "No data received"});
    }
    
}