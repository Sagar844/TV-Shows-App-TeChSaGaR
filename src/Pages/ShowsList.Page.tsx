import { FC,} from "react";
import { connect, ConnectedProps } from "react-redux";
import { showqerychange } from "../actions/show";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import withRouter from "../hocs/withRouter";
import { show } from "../models/show";

import { showloadingselector, showqueryselectore, showselectore } from "../selectore/shows";
import { State } from "../store";

type ShowListPageprops = ReduxProps


const ShowsListPage: FC<ShowListPageprops> = ({ query, shows, showquery,loading }) => {
  return (
    <div>
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(event) => {
          showquery(event.target.value);
        }}

      />  <div className="text-3xl flex items-center justify-center">{loading && <LoadingSpinner/>}</div> 
      </div>
      {shows && (
        <div className="flex flex-wrap justify-center">
          {shows.map((s) => (
            <ShowCard key={s.id} show={s} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { query: showqueryselectore(state), shows: showselectore(state) , loading:showloadingselector(state)};
};

const mapDispatchToProps = {
  showquery: showqerychange,
};


const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowsListPage);
