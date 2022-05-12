import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Movie = ({ id, name, imgSrc, about, isFav, onFav }) => {
  const toggleFav = (e) => {
    e.preventDefault();
    onFav(id);
  };

  const navigate = useNavigate();

  return (
    <div
      className="movie-container"
      onDoubleClick={(e) => {
        toggleFav(e);
      }}
      onClick={() => {
        navigate(`/movie${id}`);
      }}
    >
      <img className="movie-img" src={imgSrc} alt={name} />

      <div className="movie-info">
        <h1 className="movie-name">{name}</h1>

        <div className="movie-rating">
          <h4>{about.rating}/5</h4>

          {isFav ? (
            <div
              className="icon like"
              onClick={(e) => {
                toggleFav(e);
              }}
            >
              <FaHeart />
            </div>
          ) : (
            <div
              className="icon"
              onClick={(e) => {
                toggleFav(e);
              }}
            >
              <FaHeartBroken />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
