import MoviesSection from "./MoviesSection";

import { getTrendingMovies, getMoviesByGenre } from "../../util/Movies.js";
import "./styles/moviesShowcase.css";

const MoviesShowcase = ({ movies }) => {
  return (
    <div className="movies-showcase">
      <MoviesSection title="Trending" movies={getTrendingMovies(movies)} />
      <MoviesSection
        title="Action"
        movies={getMoviesByGenre(movies, "action")}
      />
    </div>
  );
};

export default MoviesShowcase;
