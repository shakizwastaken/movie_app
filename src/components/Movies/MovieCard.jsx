import { useNavigate } from "react-router-dom";
import "./styles/movieCard.css";

const MovieCard = ({ id, title, srcImg, about }) => {
  const { rating, desc, director, actors } = about;

  const navigate = useNavigate();

  const formatTitle = (title) => {
    if (title.length > 16) {
      return desc.slice(0, 13) + "...";
    }
    return title;
  };

  const formatDesc = (desc) => {
    return desc.slice(0, 50) + "...";
  };

  return (
    <div
      className="movie-card"
      onClick={() => {
        navigate(`/movie/${id}`);
      }}
    >
      <div className="movie-img-container">
        <img className="movie-img" src={srcImg} alt={title} />
      </div>
      <div className="movie-title">
        <h1>{formatTitle(title)}</h1>
      </div>
      <div className="movie-info">
        <p>{formatDesc(desc)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
