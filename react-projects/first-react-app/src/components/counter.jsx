import { useState } from "react";

const Counter = () => {
  //   let count = 0;

  let [count, setCount] = useState(0);

  function handleAddClick() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function handleSubtractClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter Component</h1>

      <h3>Count : {count} </h3>

      {count == 0 ? <p>You have reached the last limit sir 😇</p> : <></>}
      {count == 10 ? <p>Hurray! You have reached the Final sir 🎉</p> : <></>}

      {count < 10 && <button onClick={handleAddClick}>Add Count</button>}

      {count > 0 && (
        <button onClick={handleSubtractClick}>Subtract Count</button>
      )}
    </>
  );
};

export default Counter;
