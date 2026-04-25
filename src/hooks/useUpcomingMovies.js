import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options,
    );
    const upcomingMovies = await movieData.json();
    dispatch(addUpcomingMovies(upcomingMovies.results));
  };
};

export default useUpcomingMovies;