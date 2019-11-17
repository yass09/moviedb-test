/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import { rootSaga } from './sagas';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['selectedMovie'],
};

const initialState = {
	movieList: [],
	selectedMovie: {},
	orderBy: 'popularity',
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleware();

const enhancers = compose(
	applyMiddleware(sagaMiddleWare),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(pReducer, initialState, enhancers);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

export default store;
