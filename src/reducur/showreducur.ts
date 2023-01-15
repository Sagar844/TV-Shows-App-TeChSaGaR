import { AnyAction } from "redux";
import produce from "immer";
import { show } from "../models/show";
import { SHOW_ID_, SHOW_LOADED_, SHOW_QUERY_CHANGE_ } from "../actions/show";
import { normalize, schema } from "normalizr";
import { showselectore } from "../selectore/shows";

export type state = {
  shows: { [showid: number]: show };
  query_show: { [query: string]: number[] };
  query: string;
  show_Loading: { [showId: number]: boolean };
  Loading: boolean;
};
export const intisialState: state = {
  shows: {},
  query_show: {},
  query: "",
  show_Loading: {},
  Loading: false,
};

function showreducur(state = intisialState, action: AnyAction): state {
  switch (action.type) {
    case SHOW_LOADED_:
      return produce(state, (draft) => {
        const shows = action.payload as show[];

        if (!shows || shows.length === 0) {
          return;
        }
        // const query = action.payload.query as string
        const showschema = new schema.Entity("shows");
        const normalizedata = normalize(shows, [showschema]);
        draft.Loading =false
        draft.query_show[draft.query] = normalizedata.result;
        draft.shows = { ...draft.shows, ...normalizedata.entities.shows };
        // draft.query = query;
      });

    case SHOW_QUERY_CHANGE_:
      return produce(state, (draft) => {
        draft.query = action.payload;
        draft.Loading = true;
      });

    case SHOW_ID_:
      return produce(state, (draft) => {
        const show = action.payload as show;
        draft.shows[show.id] = show;
      });

    default:
      return state;
  }
}
export default showreducur;
//
