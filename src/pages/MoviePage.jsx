import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./moviePage.css";

const MovieInfo = ({ movies }) => {
  const { id } = useParams();
  const { name, imgSrc, about, isFav } = movies[id];

  const movie = useRef(null);

  useEffect(() => {
    movie.current.scrollIntoView(false);
  }, []);

  return (
    <div ref={movie} className="movie-page">
      <h1 id="movie-title">{name}</h1>
      <img src={imgSrc} alt={name} />
      <h2>{about.director}</h2>
      <h4>{about.desc}</h4>
      <div>
        <h2>{about.rating}</h2>
        <h2>{isFav.toString()}</h2>
      </div>
    </div>
  );
};

export default MovieInfo;
