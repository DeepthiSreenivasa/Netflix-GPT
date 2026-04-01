import { useEffect } from "react";
import useNowPlaying from "../hooks/useNowPlayingMovies";

const MovieCard = ({ title, data }) => {
  return (
    <div className="text-xl">
      <h1 className="mb-4 mt-4 px-2">{title}</h1>

      <div className="flex overflow-x-scroll">
        {data?.map((item) => (
          <img
            className="px-3"
            key={item.id}
            src={"https://image.tmdb.org/t/p/w300/" + item.backdrop_path}
          ></img>
        ))}
      </div>
    </div>
  );
  //   console.log("nowPlayingList::", nowPlayingList);
};

export default MovieCard;
