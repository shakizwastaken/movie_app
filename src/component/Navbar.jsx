import EditSection from "./EditSection";

import { useNavigate } from "react-router-dom";

const Navbar = ({ addMovieRef }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          MyMovies
        </h1>
      </div>

      <EditSection addMovieRef={addMovieRef} />
    </header>
  );
};

export default Navbar;
