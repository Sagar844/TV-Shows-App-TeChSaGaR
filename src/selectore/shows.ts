import { createSelector } from "reselect";
import { State } from "../store";

export const showstateselectore = (state: State) => state.shows;

export const showqueryselectore = createSelector(
  showstateselectore,
  (showstate) => showstate.query
);

export const showmapselectore = createSelector(
  showstateselectore,
  (showstate) => showstate.shows
);
export const showquerymapselector = createSelector(
  showstateselectore,
  (showstate) => showstate.query_show
);
export const showselectore = createSelector(
  showmapselectore,
  showqueryselectore,
  showquerymapselector,
  (showmap, query, queryShowMap ) =>
    queryShowMap[query]?.map((showId) => showmap[+showId])
);


export const showloadingselector= createSelector(
    showstateselectore,
    (showstate) => showstate.Loading
  );