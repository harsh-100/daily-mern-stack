import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  const [userData, setUserData] = useState();

  async function getUserDataById() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const result = await response.json();
    setUserData(result);
    console.log(result, "result ");
  }

  useEffect(() => {
    getUserDataById();
  }, []);

  if (!userData) {
    return (
      <>
        <h2>Loading ...</h2>
      </>
    );
  }
  // console.log(data);
  return (
    <>
      <h2>User Details Page</h2>
      <h5>Name : {userData.name}</h5>
      <h5>Email : {userData.email}</h5>
    </>
  );
};

export default UserDetails;

// /user?age=10&&gender="female"

// userId = params

// // queries
// age = 10
// gender = "female"
