import { useState, useEffect } from "react";
import MovieTabs from "./components/MovieTabs";
import "./App.css";

function Home() {
  const [searchValue, setSearchValue] = useState("trek");
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `${
      import.meta.env.VITE_API_URL || process.env.VITE_API_URL
    }/?s=${searchValue}&apikey=${
      import.meta.env.VITE_API_KEY || process.env.VITE_API_KEY
    }`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className=" movie-app w-full ">
      <div className="flex flex-col md:flex-row justify-center md:gap-10 items-center">
        <h1>Movies</h1>
        <div className="flex flex-col items-start ">
          <p>Search:</p>
          <input
            className="p-2 rounded-lg"
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Type to search..."
          />
        </div>
      </div>
      <MovieTabs movies={movies} />
    </div>
  );
}

export default Home;
