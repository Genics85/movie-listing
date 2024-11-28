import React from "react";
import { useNavigate } from "react-router-dom";

const MovieTabs = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-6 ">
      {movies?.map((movie, i) => (
        <div
          onClick={() => {
            navigate("name", { state: { det: movie } });
          }}
          key={i}
          className="flex flex-col gap-3 transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
        >
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieTabs;
