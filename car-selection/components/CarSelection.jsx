import React, { useState } from "react";

function CarSelection() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="text-center">
      <div className="font-bold">
        <h1>Select your car</h1>
      </div>
      <div className="flex flex-row">
        <span className="w-[120px]">Select a car </span>
        <select
          className="w-[200px]"
          name=""
          id=""
          value={text}
          onChange={(e) => handleChange(e)}
        >
          <option value="Mercedes S600">Mercedes S600</option>
          <option value="Lamborgini">Lamborgini</option>
          <option value="Ferrari">Ferrari</option>
        </select>
      </div>
      <div className="flex flex-row">
        <span className="w-[120px]">Select a color </span>
        <select
          className="w-[200px]"
          name=""
          id=""
          value={color}
          onChange={(e) => handleChangeColor(e)}
        >
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      <p className="font-bold">
        You select select a {color} - {text}
      </p>
    </div>
  );
}

export default CarSelection;
