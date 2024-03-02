// src/Counter.js

import React, { useState } from "react";
import { decrement, increment, updateName } from "../store/action";
import { useDispatch, useSelector } from "react-redux";

const NewCounter = () => {
  const [userName, setUserName] = useState();
  const count = useSelector((state) => state);

  console.log("The value in count ", count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {}</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(updateName({ payload: userName }))}>
        Update Name
      </button>
    </div>
  );
};

export default NewCounter;
