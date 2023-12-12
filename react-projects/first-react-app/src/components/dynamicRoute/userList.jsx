import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUserList(result);
    console.log(result, "result ");
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <h2>User List </h2>

      <ul>
        {userList &&
          userList.map((eachObj) => (
            <>
              <Link to={`/user/${eachObj.id}`}>
                <li>{eachObj.name}</li>
              </Link>
            </>
          ))}
      </ul>
    </>
  );
};

export default UserList;
