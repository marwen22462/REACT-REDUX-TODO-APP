import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from './js/store/createStore'
import Todo from './js/todo'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        </div>;
    </Provider>
  );
}

export default App;
