import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const details = state?.det;
  console.log("state", state);
  return (
    <div className=" relative">
      <div className="flex flex-col gap-3 ">
        <img src={details.Poster} alt={details.Title} />
        <p>{details.Title}</p>
      </div>
      <p>Year of Release: {details.Year}</p>
      <p>Type: {details.Type}</p>
      <p>imdbID: {details.imdbID}</p>
      <button className="absolute top-0 -left-40" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default MovieDetails;
