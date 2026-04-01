import { useDispatch, useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";

import useTopVideoOfNowPlayingVideo from "../hooks/useTopVideoOfNowPlayingVideo";

const MainContainer = () => {
  useNowPlaying();
  useTopVideoOfNowPlayingVideo();

  const youtubeKey = useSelector(
    (store) => store?.movies?.topVideoOfNowPlayingList?.[0]?.key,
  );
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies,
  );

  return (
    nowPlayingMovies && (
      <>
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
          {youtubeKey && (
            <iframe
              className="pointer-events-none absolute inset-0 h-full w-full scale-150 object-cover md:scale-125"
              src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&loop=1&playlist=${youtubeKey}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 md:px-12">
            <div className="max-w-2xl space-y-6">
              <div className="text-4xl font-extrabold leading-tight md:text-6xl">
                {nowPlayingMovies[2]?.title}
              </div>
              <div className="max-w-xl text-sm leading-7 text-white/85 md:text-base">
                {nowPlayingMovies[2]?.overview}
              </div>
              <div className="flex gap-3">
                <button className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
                  Play
                </button>
                <button className="rounded-md border border-white/40 bg-black/40 px-6 py-2 text-sm font-semibold text-white transition hover:bg-black/60">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default MainContainer;
