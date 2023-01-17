import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { Loadshow_Action_, SHOW_QUERY_CHANGE_ } from "../actions/show";
import { fetchshowDetail, getProductsSaga } from "./showSaga";


const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    
  yield debounce(400 ,SHOW_QUERY_CHANGE_, getProductsSaga);
  yield takeEvery(Loadshow_Action_,fetchshowDetail );
}

export default sagaMiddleware;
