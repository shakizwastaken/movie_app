import Movie from "./Movie.jsx";
import React from "react";

const Movies = React.forwardRef(({ searchInput, setMovies, movies }, ref) => {
  //add movie to user's liked movies.

  const toggleFav = (id) => {
    let result = movies.map((movie) =>
      movie.id === id ? { ...movie, isFav: !movie.isFav } : movie
    );

    setMovies(result);
  };

  //render all movies disponible by random sorting.

  const renderAllMovies = () => {
    return movies.map((movie) => (
      <Movie key={movie.id} {...movie} onFav={toggleFav} />
    ));
  };

  //get how relevant user's search input to movie name.

  const getRelevancy = (str1, str2) => {
    str1 = str1.toLocaleLowerCase().trim();
    str2 = str2.toLocaleLowerCase().trim();

    if (str1 === str2) {
      return 3;
    } else if (str1.startsWith(str2)) {
      return 2;
    } else if (str1.includes(str2)) {
      return 1;
    } else {
      return -1;
    }
  };

  //render by search input.

  const renderBySearch = () => {
    let result = movies
      .filter((movie) => getRelevancy(movie.name, searchInput) >= 0)
      .sort(
        (movieA, movieB) =>
          getRelevancy(movieB.name, searchInput) -
          getRelevancy(movieA.name, searchInput)
      );
    return result.length !== 0 ? (
      result.map((movie) => (
        <Movie key={movie.id} {...movie} onFav={toggleFav} />
      ))
    ) : (
      <h2 style={{ color: "darkgray" }}>Failed to find a matching movie...</h2>
    );
  };

  //render movies by rating.

  const renderByRating = (value) => {
    return movies
      .filter((movie) => movie.about.rating >= value)
      .map((movie) => <Movie key={movie.id} {...movie} onFav={toggleFav} />);
  };

  //render user's liked movies.

  const renderUserFav = () => {
    return movies.map(
      (movie) =>
        movie.isFav && <Movie key={movie.id} {...movie} onFav={toggleFav} />
    );
  };

  return (
    <>
      {searchInput && (
        <div ref={ref} className="movies-container">
          <h1>Search results:</h1>

          <div className="movies">{renderBySearch()}</div>
        </div>
      )}

      <div className="movies-container">
        <h1>Trending now:</h1>

        <div className="movies">{renderByRating(3)}</div>
      </div>

      <div className="movies-container">
        <h1>All Movies:</h1>

        <div className="movies">{renderAllMovies()}</div>
      </div>

      <div className="movies-container">
        <h1>Your Movies:</h1>

        <div className="movies">{renderUserFav()}</div>
      </div>
    </>
  );
});

export default Movies;
