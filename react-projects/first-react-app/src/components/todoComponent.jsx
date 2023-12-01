import { useEffect, useState } from "react";

import styles from "../styles/todo.module.css";

const TodoComponent = () => {
  const initialValue = JSON.parse(localStorage.getItem("user_task_array")) || [
    { text: "Go to Market", complete: false },
    { text: "Buy vegetable", complete: false },
    { text: "Watch TV", complete: false },
    { text: "dance", complete: false },
    { text: "Singing", complete: false },
  ];

  const [myTask, setMyTask] = useState(initialValue);

  const [activeValue, setActiveValue] = useState(myTask.length);
  const handleAddTask = () => {
    if (item) {
      let arr = [...myTask, { text: item, complete: false }];
      setMyTask(arr);
      setItem("");
    }
  };

  const [item, setItem] = useState("");
  useEffect(() => {
    let arr = [...myTask];

    let newArr = arr.filter((each) => !each.complete).length;

    let stringedData = JSON.stringify(myTask);
    localStorage.setItem("user_task_array", stringedData);

    setActiveValue(newArr);
  }, [myTask]);

  function handleChange(e) {
    console.log(e);
    setItem(e.target.value);
  }

  function handleCheckbox(index) {
    let arr = [...myTask];

    console.log(myTask[index]);
    arr[index].complete = !arr[index].complete;

    setMyTask(arr);

    // filter logic
    let countArray = arr.filter((each) => !each.complete);
    setActiveValue(countArray.length);
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>My TO Do app:</h1>
        <input
          type="text"
          placeholder="Add item here ..."
          onChange={handleChange}
          value={item}
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {myTask.map((eachValue, index) => (
            <li>
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
        Active TODO item : {activeValue}
      </div>
    </>
  );
};

export default TodoComponent;
