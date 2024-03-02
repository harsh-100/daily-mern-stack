import "./App.css";

import HeaderComp from "./header";
import logo from "./logo.svg";

// component (PascalCase)
function App() {
  // console.log("hello i am here ");
  var name = "harsh";

  return (
    <div className="Appcheck">
      <header className="App-header">
        <HeaderComp />
        <h1>This is my {name} </h1>
      </header>
    </div>
  );
}

// html inside the js

// javascript xml
export default App;
