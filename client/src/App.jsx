import React, { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
