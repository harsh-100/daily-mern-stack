import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(1);

  const [email, setEmail] = useState();
  const [name, setName] = useState();

  function handleChange() {
    setCount(count + 1);
  }

  async function getUserData() {
    const userData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${count}`
    );
    const convertedData = await userData.json();

    setEmail(convertedData.email);
    setName(convertedData.name);
  }

  useEffect(() => {
    console.log("New count is ", count);
    getUserData();
  }, [count]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>

      <h3>User Details </h3>

      {email && name ? (
        <>
          {" "}
          <p>Email :{email} </p>
          <p>name : {name}</p>
        </>
      ) : (
        <>Loading...</>
      )}

      <button onClick={handleChange}>Change Count </button>
    </>
  );
}

export default Timer;
