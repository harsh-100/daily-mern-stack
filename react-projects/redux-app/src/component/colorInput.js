import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addColor } from "../store/actions/colorActions";

const ColorInput = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.colors);
  console.log("🚀 ~ file: colorInput.js:9 ~ ColorInput ~ value:", value);
  const [newColor, setNewColor] = useState("");

  const handleAddColor = () => {
    if (newColor.trim() !== "") {
      dispatch(addColor(newColor));
      setNewColor("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
};

export default ColorInput;
