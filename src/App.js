import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import { movies } from "./util/Movies";

import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cursor from "./components/cursor/Cursor";
import SearchResult from "./pages/SearchResult/SearchResult";
import MoviePage from "./pages/moviePage/MoviePage";
import AddMovie from "./components/addMovie/addMovie";

import "./App.css";

function App() {
  const [stateMovies, setMovies] = useState(movies);

  let addMovieRef = useRef();

  return (
    <Router>
      <div className="container">
        <Cursor />

        <NavBar addMovieRef={addMovieRef} />

        <Routes>
          <Route
            path="/"
            element={<Home setMovies={setMovies} movies={stateMovies} />}
          />
          <Route
            path="/search/:search"
            element={<SearchResult movies={movies} />}
          />

          <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
        </Routes>

        <AddMovie ref={addMovieRef} setMovies={setMovies} movies={movies} />
      </div>
    </Router>
  );
}

export default App;
