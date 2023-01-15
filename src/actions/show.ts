import { ActionCreator } from ".";
import { show } from "../models/show";

export const SHOW_LOADED_ = "SHOW_LOADED_ ";

export const getProductsACTION: ActionCreator<{ shows: show[] }> = (
  shows: show[],
  query: string
) => ({
  type: SHOW_LOADED_,
  payload: shows,
});

export const SHOW_QUERY_CHANGE_ = "SHOW_QUERY_CHANGE_ ";

export const showqerychange: ActionCreator<string> = (query) => ({
  type: SHOW_QUERY_CHANGE_,
  payload: query,
});

export const SHOW_ID_ = "SHOW_ID_ ";
export const showActionLoaded: ActionCreator<show> = (show: show) => ({
  type: SHOW_ID_,
  payload: show,
});

export const Loadshow_Action_ = "Loadshow_Action_ ";

export const showloadedACTION: ActionCreator<number> = (showId: number) => ({
  type: Loadshow_Action_,
  payload: showId,
});
