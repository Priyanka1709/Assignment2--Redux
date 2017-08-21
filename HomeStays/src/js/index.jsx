import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import App from './app';
import rootSaga from './sagas/saga';
import appReducer from './reducers/reducer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

const sagaMiddleWare = createSagaMiddleWare();

const reducers = combineReducers({
    app: appReducer,
});

const store = createStore(reducers,
    applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);

