import { useDispatch } from "react-redux";
import { options } from "../constants";
import { searchResults } from "../store/gptSlice";


const useGetMovieDetailsResults = () => {
  const dispatch = useDispatch();

  const movieNames = ["Fight Club", "Transformer", "Annabelle"];

  const getMovieDetailsData = async () => {
    const movieDetailsData = await Promise.all(
      movieNames.map(async (movieName) => {
        const url =
          "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(movieName) +
          "&include_adult=false&language=en-US&page=1";

        const movieDetails = await fetch(url, options);
        return movieDetails.json();
      }),
    );

    console.log("MOVIE Data::", movieDetailsData);
    dispatch(searchResults(movieDetailsData));
    return movieDetailsData;
  };

  return getMovieDetailsData;
};

export default useGetMovieDetailsResults;