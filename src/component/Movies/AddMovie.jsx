import React, { useState } from "react";
import Input from "./Input.jsx";

const AddMovie = React.forwardRef(({ createMovie }, ref) => {
  const initValues = {
    name: {
      key: 0,
      label: "name of movie:",
      value: "",
      errMsg: "please input a name for the movie.",
    },
    desc: {
      key: 1,
      label: "description of movie:",
      value: "",
      err: false,
      errMsg: "please input a movie description.",
    },
    director: {
      key: 2,
      label: "movie directed by:",
      value: "",
      err: false,
      errMsg: "please input a director name for the movie.",
    },
    actors: {
      key: 3,
      label: "actors of movie:",
      value: "",
      err: false,
      errMsg: "please input atleast 1 director name for the movie.",
    },
    rating: {
      key: 4,
      label: "rating of the movie:",
      value: 0.5,
      err: false,
      type: "range",
      min: 0.5,
      max: 5,
      step: 0.5,
    },
    isFav: {
      key: 5,
      label: "add movie as favorite:",
      type: "checkBox",
      err: false,
      value: false,
    },
  };

  const [formInputs, setFormInputs] = useState(initValues);

  const addMovie = () => {
    createMovie(
      formInputs["name"].value,
      formInputs["desc"].value,
      formInputs["director"].value,
      formInputs["actors"].value,
      formInputs["rating"].value,
      formInputs["isFav"].value
    );

    clearInputs();
  };

  const clearInputs = () => {
    setFormInputs(initValues);
  };

  const checkErr = (inputName) => {
    const formInput = formInputs[inputName];
    const value = formInput.value.toString().trim();
    const result = { ...formInputs };
    if (value) {
      result[inputName].err = false;
      return true;
    } else {
      result[inputName].err = true;
      setFormInputs(result);
      console.log(formInputs);
      return false;
    }
  };

  const validate = () => {
    let isValid = true;

    Object.keys(formInputs).forEach((key) => {
      if (!checkErr(key)) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addMovie();
    }
  };

  const renderInputs = () => {
    return Object.keys(formInputs).map((key) => (
      <Input
        name={key.toString()}
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        {...formInputs[key]}
      />
    ));
  };

  return (
    <div ref={ref} className="addMovie">
      <h1>Add your own movies to our collection !</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-form">{renderInputs()}</div>

        <button type="submit" className="btn">
          addMovie
        </button>
      </form>
    </div>
  );
});

export default AddMovie;
