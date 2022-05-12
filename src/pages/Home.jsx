import React from "react";

import HeroSection from "../component/HeroSection";
import Movies from "../component/Movies/Movies";

const Home = ({
  setSearchInput,
  searchInput,
  resultRef,
  movies,
  setMovies,
}) => {
  return (
    <>
      <HeroSection setSearchInput={setSearchInput} resultRef={resultRef} />

      <Movies
        searchInput={searchInput}
        ref={resultRef}
        movies={movies}
        setMovies={setMovies}
      />
    </>
  );
};

export default Home;
