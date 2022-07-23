import React, { useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, seterror] = useState(null);

  // useEffect(() => {
  //   fetchMovieHandler();
  // }, []);

  const fetchMovieHandler = useCallback(async () => {
    setIsloading(true);
    seterror(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("somtheing Went wrong");
      }
      const data = await response.json();

      // .then((response) => {
      //   return response.json();
      // }) await and async in same as we used then
      // .then((data) => {
      const transformedmovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setmovies(transformedmovies);
      setIsloading(false);
    } catch (error) {
      seterror(error.message);
      setIsloading(false);
    }

    // });
  });

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isloading && movies.length === 0 && !error && <p>found no movies</p>}
        {isloading && <p>loading...</p>}
        {!isloading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
