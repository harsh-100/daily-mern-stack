import "./App.css";

import HeaderComp from "./header";
import logo from "./logo.svg";

function App() {
  return (
    <div className="Appcheck">
      <header className="App-header">
        <HeaderComp />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
