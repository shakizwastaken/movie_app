import NavLinks from "./NavLinks";

import { useNavigate } from "react-router-dom";

import "./navbar.css";

const NavBar = ({ addMovieRef }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            Logo.
          </h1>
        </div>
        <NavLinks addMovieRef={addMovieRef} />
      </div>
    </nav>
  );
};

export default NavBar;
