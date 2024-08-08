import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ToDoList } from "./components/TodoList";

function App() {
  return(
    <div>
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App;
