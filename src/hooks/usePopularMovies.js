import { data } from "react-router-dom";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options,
    );

    const popularMovies = await popularMoviesData.json();

    dispatch(addPopularMovies(popularMovies.results));
  };
};
export default usePopularMovies;
