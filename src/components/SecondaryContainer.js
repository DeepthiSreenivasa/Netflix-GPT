import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const topRateMoviesList = useSelector((store) => store.movies.topRateMovies);
  const popularMoviesList = useSelector((store) => store.movies.popularMovies);
  const upcomingMoviesList = useSelector(
    (store) => store.movies.upcomingMovies,
  );

  return (
    <>
      <div className="bg-black text-white">
        <div className="relative -mt-32 px-4">
          <MovieCard
            title={"Now Playing"}
            data={nowPlayingMoviesList}
          ></MovieCard>
          <MovieCard title={"TopRated"} data={topRateMoviesList}></MovieCard>
          <MovieCard title={"Popular"} data={popularMoviesList}></MovieCard>
          <MovieCard title={"Upcoming"} data={upcomingMoviesList}></MovieCard>
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
