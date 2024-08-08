import React from "react"
import { TodoInput } from "./TodoInput"

export const ToDoList = ()=>{
    return(
        <div className="flex gap-3 p-4">
            <input  type="checkBox" name="" id="" />
            <TodoInput/>
        </div>
    )
}