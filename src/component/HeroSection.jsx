import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = ({ setSearchInput, resultRef }) => {
  const search = useRef(undefined);

  const handleClick = (e) => {
    setSearchInput(search.current.value);
    resultRef.current.scrollIntoView();
  };

  return (
    <div id="hero-section">
      <h1>Your favorite movies in 1 place. </h1>

      <div className="cta">
        <h3>find your story:</h3>
        <div className="search-bar">
          <input ref={search} type="text" placeholder="Enter a movie name..." />
          <div
            className="icon"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <FaSearch />
          </div>
        </div>
      </div>

      <img className="hero-bg" src="/images/hero-bg.png" alt="hero-bg" />
    </div>
  );
};

export default HeroSection;
