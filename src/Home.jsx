import { useState, useEffect } from "react";
import MovieTab from "./components/MovieTab";
import "./App.css";

function Home() {
  const [searchValue, setSearchValue] = useState("trek");
  const [movies, setMovies] = useState([]);

//   const getMovieRequest = async (searchValue) => {
//     const url = `${import.meta.env.VITE_API_URL}/?s=${searchValue}&apikey=${
//       import.meta.env.VITE_API_KEY
//     }`;

//     const response = await fetch(url);
//     const responseJson = await response.json();

//     if (responseJson.Search) {
//       setMovies(responseJson.Search);
//     }
//   };

//   useEffect(() => {
//     getMovieRequest(searchValue);
//   }, [searchValue]);

  return (
    <div className="container movie-app w-screen">
      <div className="flex justify-between items-center mt-4 mb-4">
        <h1>Movies</h1>
        <input
          className="p-2 rounded-lg"
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Type to search..."
        />
      </div>
      <div className="flex">
        <MovieTab movies={movies} />
      </div>
    </div>
  );
}

export default Home;
