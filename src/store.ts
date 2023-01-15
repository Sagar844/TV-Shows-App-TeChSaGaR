import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import showreducur from "./reducur/showreducur";
import sagaMiddleware, { rootSaga } from "./Sagas";

export type Moment = {};

export type State = ReturnType<typeof reducer>;

const reducer = combineReducers({
  shows: showreducur,

});

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer,composeWithDevTools( applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
