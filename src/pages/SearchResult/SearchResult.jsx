import { useParams } from "react-router-dom";
import { findMatch } from "../../util/Movies";
import { no_result } from "../../util/Shapes";

import MoviesSection from "../../components/Movies/MoviesSection";

import "./searchResult.css";
import { useEffect } from "react";

const SearchResult = ({ movies }) => {
  const { search } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const result = findMatch(movies, search);

  const found = () => {
    return <MoviesSection title="Search results" movies={result} />;
  };

  const notFound = () => {
    return (
      <>
        {no_result}
        <h1>Sorry, we couldn't find any results</h1>
      </>
    );
  };

  return (
    <div className="search-result">
      {result.length !== 0 ? found() : notFound()}
    </div>
  );
};

export default SearchResult;
