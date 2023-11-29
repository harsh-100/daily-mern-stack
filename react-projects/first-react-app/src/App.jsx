import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BodyComponent from "./components/BodyComponent";
import Counter from "./components/counter";
import Headers from "./components/Header";
import HomePage from "./prepare/homeComp";
import HomePageComponent from "./components/homePage";
import Timer from "./components/learn-useEffect";
// import TodoComponent from "./prepare/todo-with-chechbox";
import TodoComponent from "./components/todoComponent";
import TodoComponentWithLocalstorage from "./prepare/todo-with-localstorage";
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

  // wrapper
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent name={"Home page"} />} />

          <Route
            path="/about"
            element={<HomePageComponent name={"About page"} />}
          />

          <Route
            path="/contact"
            element={<HomePageComponent name={"Contact page"} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <HomePageComponent /> */}

      {/* <Counter /> */}

      {/* <Timer /> */}
      {/* <TodoComponent /> */}
      {/* <HomePage /> */}

      {/* <TodoComponentWithLocalstorage /> */}
      {/* <TodoComponent /> */}
      {/* <Headers /> */}

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

      {/* </div> */}
    </>
  );
}

export default AppComponent;
