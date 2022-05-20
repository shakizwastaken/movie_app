import "./searchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.length !== 0) navigate(`/search/${value}`);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <input
          className="input"
          placeholder={placeholder}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
            if (e.key === "Escape") setValue("");
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <span>|</span>

        <FontAwesomeIcon
          onClick={() => {
            handleSubmit();
          }}
          className="icon"
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default SearchBar;
