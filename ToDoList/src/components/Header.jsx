import React from "react";

import { MdDarkMode } from "react-icons/md";
export const Header = ()=>{
    return(
        <div className=" flex justify-between p-4 w-full items-center">
          <h2 className="text-2xl font-bold">TODO</h2>
          <MdDarkMode className="text-xl"/>
        </div>
    )
}