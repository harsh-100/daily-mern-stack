import { useEffect, useState } from "react";

const TodoComponentWithLocalstorage = () => {
  // Load tasks from localStorage or use default value
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [
    { text: "Go to Market", complete: false },
    { text: "Buy vegetable", complete: false },
    { text: "Watch TV", complete: false },
    { text: "dance", complete: false },
    { text: "Singing", complete: false },
  ];

  const [myTask, setMyTask] = useState(storedTasks);
  const [activeValue, setActiveValue] = useState(storedTasks.filter((task) => !task.complete).length);
  const [item, setItem] = useState("");

  useEffect(() => {
    // Save tasks to localStorage whenever myTask changes
    localStorage.setItem("tasks", JSON.stringify(myTask));

    // Update the activeValue whenever myTask changes
    setActiveValue(myTask.filter((task) => !task.complete).length);
  }, [myTask]);

  const handleAddTask = () => {
    if (item) {
      let arr = [...myTask, { text: item, complete: false }];
      setMyTask(arr);
      setItem("");
    }
  };

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleCheckbox(index) {
    let arr = [...myTask];
    arr[index].complete = !arr[index].complete;
    setMyTask(arr);
  }

  return (
    <>
      <h1>My TO-DO app:</h1>
      <input
        type="text"
        placeholder="Add item here ..."
        onChange={handleChange}
        value={item}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {myTask.map((eachValue, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={eachValue.complete}
              onChange={() => {
                handleCheckbox(index);
              }}
            />
            <span
              style={{
                textDecoration: eachValue.complete ? "line-through" : "",
              }}
            >
              {eachValue.text}
            </span>
          </li>
        ))}
      </ul>
      Active TODO items: {activeValue}
    </>
  );
};

export default TodoComponentWithLocalstorage;
