import "./App.css";

import BodyComponent from "./components/BodyComponent";
import Headers from "./components/Header";

function AppComponent() {
  var userData = [
    { name: "Harsh", age: 13 },
    { name: "Raj", age: 14 },
    { name: "Tiger", age: 15 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
  ];

  return (
    <>
      <Headers />
      {userData.map((oneObj) => (
        <BodyComponent name={oneObj.name} age={oneObj.age} />
      ))}
    </>
  );
}

export default AppComponent;
