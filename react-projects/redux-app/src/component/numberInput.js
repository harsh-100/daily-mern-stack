// src/components/NumberInput.js

import React, { useState } from "react";
import { addNumber, removeNumber } from "../store/actions/numberActions";
import { useDispatch, useSelector } from "react-redux";

const NumberInput = () => {
  const dispatch = useDispatch();
  const [newNumber, setNewNumber] = useState("");
  const numbers = useSelector((state) => state.numbers.numbers);

  const handleAddNumber = () => {
    const parsedNumber = parseInt(newNumber, 10);

    if (!isNaN(parsedNumber)) {
      dispatch(addNumber(parsedNumber));
      setNewNumber("");
    }
  };

  const handleRemoveNumber = (number) => {
    dispatch(removeNumber(number));
  };

  return (
    <div>
      <h2>Favorite Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            {number}
            <button onClick={() => handleRemoveNumber(number)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        <button onClick={handleAddNumber}>Add Number</button>
      </div>
    </div>
  );
};

export default NumberInput;
