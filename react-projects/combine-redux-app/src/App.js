import "./App.css";

import CounterComponent from "./components/counterComponent";
import { Provider } from "react-redux";
import UserComp from "./components/userComp";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
        <UserComp />
      </div>
    </Provider>
  );
}

export default App;
