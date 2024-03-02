import { useState } from "react";

const TodoComponent = () => {
  const [myTask, setMyTask] = useState([
    { text: "Go to market", completed: false },
    { text: "Buy vegetable", completed: false },
    { text: "Watch tv", completed: false },
    { text: "Dance", completed: false },
    { text: "Singing", completed: false },
  ]);

  const [item, setItem] = useState("");

  const handleAddTask = () => {
    if (item.trim() !== "") {
      let arr = [...myTask, { text: item, completed: false }];
      setMyTask(arr);
      setItem(""); // Clear the input field after adding a task
    }
  };

  const handleToggleComplete = (index) => {
    let updatedTasks = [...myTask];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setMyTask(updatedTasks);
  };
  function handleChange(e) {
    setItem(e.target.value);
  }

  const activeTodosCount = myTask.filter((task) => !task.completed).length;

  return (
    <>
      <h1>My Todo App:</h1>

      <input
        type="text"
        placeholder="Add item here ..."
        onChange={handleChange}
        value={item}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {myTask.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <p>Active Todos: {activeTodosCount}</p>
    </>
  );
};

export default TodoComponent;
