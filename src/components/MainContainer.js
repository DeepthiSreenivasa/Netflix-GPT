import { useEffect } from "react";
import { options } from "../constants";

const MainContainer = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options,
    );
   
    console.log("movieData::", await movieData.json());
  };

  return <h1>Main Container</h1>;
};

export default MainContainer;
