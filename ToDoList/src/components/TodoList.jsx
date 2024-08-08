import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todos } from "./Todos";
import { v4 as uuidv4 } from 'uuid';

export const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInputChange =(e)=>{
        e.preventDefault()
        setInputValue(e.target.value)
        console.log(e.target.vlaue);
    }

    const addToDo = ()=>{
        if(inputValue.trim){
            const newTodo ={
                id: uuid(),
                todo: inputValue
            }
        }
    }


  return (
    <div>
      <TodoInput handleInputChange={handleInputChange} />
      <Todos/>
    </div>
  );
};
