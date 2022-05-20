//components
import SearchBar from "../../components/searchBar/SearchBar";
import MoviesShowcase from "../../components/Movies/MoviesShowcase";

//css
import "./home.css";

//shapes - icons
import { bottomWaves } from "../../util/Shapes";
import { useEffect } from "react";

const Home = ({ movies, setMovies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <h1>
            Your Favourite <span className="accent accent-glow">Movies</span> In
            1{" "}
            <span id="location">
              <span className="accent accent-glow">Place</span>
            </span>{" "}
            .
          </h1>

          <SearchBar placeholder="Enter a movie name" />
        </div>
        <div className="hero-bttm-curve">{bottomWaves}</div>
      </div>

      <MoviesShowcase movies={movies} />
    </>
  );
};

export default Home;
