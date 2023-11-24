import { useState } from "react";

const TodoComponent = () => {
  const [myTask, setMyTask] = useState([
    "Go to market",
    "Buy vegetable",
    "Watch tv",
    "dance",
    "singign",
  ]);

  const handleAddTask = () => {
    console.log("Click");

    let arr = [...myTask, item];
    setMyTask(arr);
  };
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <>
      <h1>My TO Do app:</h1>

      <input
        type="text"
        placeholder="Add item here ..."
        onChange={handleChange}
        value={item}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {myTask.map((eachValue) => (
          <li>{eachValue}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoComponent;
