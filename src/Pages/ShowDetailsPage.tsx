import { FC, Key, useEffect } from "react";
import { Connect, connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { showloadedACTION } from "../actions/show";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import LoadingSpinner from "../Components/LoadingSpinner";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { show } from "../models/show";
import { showmapselectore } from "../selectore/shows";
import { State } from "../store";

type OwnProps = WithRouterProps;
type ShowDetailPageProps = ReduxProps & OwnProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  show,
  loadshow,
}) => {
  useEffect(() => {
    loadshow(+params.showId);
  }, [params.showId]);

  // console.log(show);

  return (
    <div className="mt-2">
      <Link to="/">back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genere: string) => (
          <GenrePill name={genere} key={genere} />
        ))}
      </div>
      <div className="mt-2 flex">
        <img
          src={
            show.image?.medium ||
            "data:image/png;base64,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"
          }
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>{show.summary} </p>

          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:{" "}
            <span className="text-gray-700">{show.rating.avrage}/10</span>
          </p>
        </div>
      </div>

      {/* <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: WithRouterProps) => {
  return {
    show: showmapselectore(state)[+ownProps.params.showId],
  };
};

const mapDispatchToProps = {
  loadshow: showloadedACTION,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
