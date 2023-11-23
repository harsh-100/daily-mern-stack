import "./App.css";

import BodyComponent from "./components/BodyComponent";
import Headers from "./components/Header";
import UserCard from "./components/userCard";

function AppComponent() {
  var userData = [
    { name: "Harsh", age: 13 },
    { name: "Raj", age: 14 },
    { name: "Tiger", age: 15 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
  ];

  const myTask = [
    "Go to market",
    "Buy vegetable",
    "Watch tv",
    "dance",
    "singign",
  ];

  // const filteredData = userData.filter((eachObj) => eachObj.age > 14);

  return (
    <>
      <Headers />
      {/* <div className="cardContainer"> */}
      {/* <div className="cardContainer">
        {filteredData.map((oneObj) => (
          // <BodyComponent name={oneObj.name} age={oneObj.age} />
          <UserCard
            name={oneObj.name}
            age={oneObj.age}
            mobileNumber={"987654321"}
          />
        ))}
      </div> */}

      <ul>
        {myTask.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      {/* </div> */}
    </>
  );
}

export default AppComponent;
