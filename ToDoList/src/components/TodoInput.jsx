import React from "react";
import { FaRegCircle } from "react-icons/fa";

export const TodoInput = ({handleInputChange}) => {
  return (
    <div className="flex gap-3 p-4 items-center">
      <FaRegCircle className="text-xl" />
      <input onChange={handleInputChange} className="w-full pl-2 h-10 outline-none" type="text"  placeholder="Add a New Task" />
    </div>
  );
};
