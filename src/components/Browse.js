import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </>
  );
};

export default Browse;
