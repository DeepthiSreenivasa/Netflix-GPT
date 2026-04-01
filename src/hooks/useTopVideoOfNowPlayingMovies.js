import { useEffect } from "react";
import { options } from "../constants";
import { addTopVideoOfNowPlayingList } from "../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopVideoOfNowPlayingVideo = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies,
  );

  useEffect(() => {
    const videoId = nowPlayingMovies?.[2]?.id;
    if (!videoId) return;

    getTopVideoOfNowPlayingVideo(videoId);
  }, [nowPlayingMovies]);

  const getTopVideoOfNowPlayingVideo = async (videoId) => {
    const topVideoOfNowPlayingVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?`,
      options,
    );

    const topVideoOfNowPlayingVideoDetails =
      await topVideoOfNowPlayingVideo.json();
    dispatch(
      addTopVideoOfNowPlayingList(topVideoOfNowPlayingVideoDetails.results),
    );
  };
};
export default useTopVideoOfNowPlayingVideo;
