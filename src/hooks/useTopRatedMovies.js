import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options,
    );
    const topRatedMovies = await movieData.json();
    dispatch(addTopRatedMovies(topRatedMovies.results));
  };
};

export default useTopRatedMovies;