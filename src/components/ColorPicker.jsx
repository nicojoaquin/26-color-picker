import { useState } from "react";

const ColorPicker = () => {
  const [inputColorValue, setInputColorValue] = useState("#c05454");

  return (
    <div
      className="d-flex justify-content-center align-items-center h-75"
      style={{ backgroundColor: inputColorValue }}
    >
      <div className="card p-5 d-flex">
        <h1>Color Picker</h1>
        <div className="d-flex justify-content-evenly align-items-center">
          <input
            type="color"
            value={inputColorValue}
            onChange={(e) => setInputColorValue(e.target.value)}
          />
          <span className="mt-2 fw-bold">{inputColorValue}</span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
