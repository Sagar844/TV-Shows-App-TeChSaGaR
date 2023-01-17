import { call, put } from "redux-saga/effects";
import { Action } from "../actions";
import { getProductsACTION, showActionLoaded, showloadedACTION } from "../actions/show";
import {loadshowdetail, seasrchShows } from "../api";

export function* getProductsSaga(action: Action): Generator <any,any,any>{
  const shows = yield call(seasrchShows, action.payload);
  console.warn("shows ", shows)
  yield put(getProductsACTION(shows));
  console.warn(getProductsACTION)
}
   
 export  function* fetchshowDetail(action: Action): Generator <any,any,any>{
  const show = yield call(loadshowdetail, action.payload);
  console.log("showsaga", show)
  yield put(showActionLoaded(show));
  console.log(showActionLoaded)
}

