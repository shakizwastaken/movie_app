import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieById } from "../../util/Movies";
import { no_result } from "../../util/Shapes";

import "./moviePage.css";

const MoviePage = ({ movies }) => {
  //movie id.
  const { id } = useParams();

  const movie = getMovieById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notFound = () => {
    return (
      <>
        {no_result}
        <h1>Sorry, we couldn't find any results</h1>
      </>
    );
  };

  const renderMovie = () => {
    // movie info.
    const { title, srcImg, trailer, about } = movie;
    const { rating, genre, desc, director, actors } = about;

    return (
      <>
        <h1>{title}</h1>
        <div className="movie-info-section">
          <img src={srcImg} alt={title} />

          <div className="movie-details">
            <h2>About the movie:</h2>
            <p>{desc}</p>
            <h3>Directed by : {director}</h3>
            <h3>Main actors: {actors.join(" ")}</h3>
            <h3>Genre: {genre}</h3>
            <div className="rating">{rating}</div>
          </div>
        </div>

        <div className="trailer-section">
          <h1>Watch Movie Trailer:</h1>

          <video controls>
            <source src={trailer} />
          </video>
        </div>
      </>
    );
  };

  const renderResult = () => {
    if (!movie) {
      return notFound();
    } else {
      return renderMovie();
    }
  };

  return (
    <div className="movie-page">
      <div className="movie-page-container">{renderResult()}</div>
    </div>
  );
};

export default MoviePage;
