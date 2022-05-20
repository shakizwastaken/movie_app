import "./addMovie.css";

import React from "react";
import { useState } from "react";

import { bottomWaves2, guy_pose1 } from "../../util/Shapes";
import { createMovie } from "../../util/Movies";

import FormInput from "../forms/FormInput";
import DropListMenu from "../dropMenu/DropListMenu/DropListMenu";
import RangeInput from "../rangeInput/RangeInput";

const AddMovie = React.forwardRef(({ movies, setMovies }, ref) => {
  const [title, setTitle] = useState({ value: "", err: false });
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState("action");
  const [desc, setDesc] = useState({ value: "", err: false });
  const [director, setDirector] = useState({ value: "", err: false });
  const [actors, setActors] = useState({ value: "", err: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    setMovies([
      ...movies,
      createMovie(
        movies.length + 1,
        title.value,
        rating,
        genre,
        desc.value,
        director.value,
        actors.value
      ),
    ]);
    clearForm();
  };

  const clearForm = () => {
    setTitle({ value: "", err: false });
    setGenre("action");
    setRating(0);
    setDesc({ value: "", err: false });
    setActors({ value: "", err: false });
    setDirector({ value: "", err: false });
  };

  return (
    <div ref={ref} className="addMovie-section">
      <div className="addMovie-topShape">{bottomWaves2}</div>
      <div className="addMovie-content">
        <div className="addMovie-container">
          <div className="addMovie-characters">
            {guy_pose1}
            <div className="addMovie-backShape"></div>
          </div>
          <div className="addMovie-form">
            <div className="form-header ">
              <h1>Add a movie</h1>
              <h3>add a movie to our library !</h3>
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="form-inputs"
            >
              <FormInput
                required={true}
                label="Movie title:"
                name="title"
                placeholder="input a movie name"
                properties={title}
                setProperties={setTitle}
                errMsg="please input a title for the movie."
              />
              <RangeInput
                label="Movie rating:"
                min={0}
                max={5}
                value={rating}
                setValue={setRating}
              />

              <DropListMenu
                label="Movie genre:"
                itemsList={["action", "comedie", "drama"]}
                value={genre}
                setValue={setGenre}
              />

              <FormInput
                required={true}
                label="Movie director:"
                name="director"
                placeholder="input a movie director"
                properties={director}
                setProperties={setDirector}
                errMsg="please input the director of the movie."
              />
              <FormInput
                required={true}
                label="Movie actors:"
                name="actors"
                placeholder="input a movie actor"
                properties={actors}
                setProperties={setActors}
                errMsg="please input at least 1 actor in the movie."
              />
              <FormInput
                required={true}
                label="Movie description:"
                name="desc"
                placeholder="input a movie description"
                properties={desc}
                setProperties={setDesc}
                errMsg="please input a description for the movie."
              />

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AddMovie;
