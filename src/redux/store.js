/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { rootSaga } from './sagas';

const initialState = {
	movieList: [],
	selectedMovie: {},
};

const sagaMiddleWare = createSagaMiddleware();

const enhancers = compose(
	applyMiddleware(sagaMiddleWare),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, initialState, enhancers);

sagaMiddleWare.run(rootSaga);

export default store;
