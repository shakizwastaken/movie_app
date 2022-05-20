import MovieCard from "./MovieCard";
import "./styles/moviesSection.css";

const MoviesSection = ({ title, movies }) => {
  const renderMovies = () => {
    return movies.map(({ ...movie }) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  return (
    <div className="movies-section">
      <h1>{title + " movies:"}</h1>
      <div className="movies">{renderMovies()}</div>
    </div>
  );
};

export default MoviesSection;
