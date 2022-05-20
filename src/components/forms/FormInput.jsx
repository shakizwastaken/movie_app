import { useState } from "react";
import "./formInput.css";

const FormInput = ({
  required,
  label,
  name,
  placeholder,
  properties,
  setProperties,
  errMsg,
}) => {
  const { value, err } = properties;

  const setValue = (newValue) => {
    setProperties({ value: newValue, err: err });
  };

  const setErr = (newValue) => {
    setProperties({ value: value, err: newValue });
  };

  const onInvalid = (e) => {
    e.preventDefault();
    setErr(true);
  };

  const renderInput = () => {
    return (
      <input
        required={required}
        className="input"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onInvalid={onInvalid}
      />
    );
  };
  return (
    <div className="input-container form-input">
      <label htmlFor={name}>{label}</label>
      {renderInput()}
      <h5>{err && errMsg}</h5>
    </div>
  );
};

export default FormInput;
