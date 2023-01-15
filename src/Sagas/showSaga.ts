import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { getProductsACTION, showActionLoaded } from "../actions/show";
import { loadshowdetail, seasrchShows } from "../api";

export function* getProductsSaga(action: Action): Generator <any,any,any>{
  const shows = yield call(seasrchShows, action.payload);
  yield put(getProductsACTION(shows));
}

export function* fetchshowDetail(action: Action): Generator <any,any,any>{
  const show = yield call(loadshowdetail, action.payload);
  yield put(showActionLoaded(show));
}
export default getProductsSaga;
