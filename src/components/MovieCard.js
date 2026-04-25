import { useEffect } from "react";

const MovieCard = ({ title, data }) => {
  return (
    <div className="text-xl">
      <h1 className="mb-4 mt-4 px-2">{ title ? title : " "}</h1>

      <div className="flex overflow-x-scroll scroll-smooth [&::-webkit-scrollbar]:hidden" style={{ scrollSnapType: "x mandatory" }}>
        {data?.map((item) => (
          <img
            className="shrink-0 h-auto px-3"
            key={item.id}
            style={{ scrollSnapAlign: "start" }}
            src={"https://image.tmdb.org/t/p/w300/" + (item.backdrop_path || item.poster_path)}
          ></img>
        ))}
      </div>
    </div>
  );
  //   console.log("nowPlayingList::", nowPlayingList);
};

export default MovieCard;
