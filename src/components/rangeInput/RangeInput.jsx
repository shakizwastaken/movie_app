import "./rangeInput.css";

const RangeInput = ({ name, label, min, max, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input range-input">
        <input
          type="range"
          step={0.5}
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <div className="range-input-value">{value ? value : 0}</div>
      </div>
    </div>
  );
};

export default RangeInput;
