import Counter from "./component/counter";
import GetValue from "./component/getValue";
import NewCounter from "./component/newCounter";
import { Provider } from "react-redux";
// src/App.js
import React from "react";
import store from "./store/store";
// import store from '';
// import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* dispatch(function calling ) , 
        useSelector(give the hold of value in store )  */}
        <NewCounter />
        <GetValue />
      </div>
    </Provider>
  );
};

export default App;
