import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options,
    );
    const nowPlayingMovies = await movieData.json();
    dispatch(addNowPlayingMovies(nowPlayingMovies.results));
  };
};

export default useNowPlaying;