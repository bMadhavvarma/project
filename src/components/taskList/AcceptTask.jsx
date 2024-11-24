import React from 'react'
import { motion } from "framer-motion";

const AcceptTask = ({elem}) => {

  return (
    <div className="bg-yellow-500 rounded p-3 flex flex-col shrink-0 w-full sm:w-[48%] lg:w-[30%] h-auto">
        <div className="flex justify-between bg-transparent">
          <h1 className="text-white p-2  rounded font-semibold bg-orange-600">{elem.category}</h1>
          <h3 className="text-white text-md font-semibold bg-transparent">{elem.taskDate}</h3>
        </div>
        <h1 className="bg-transparent mt-5 text-xl text-white font-bold">{elem.taskTitle}</h1>
        <p className="text-white">
      {elem.taskDescription} </p>
        <div className="flex justify-between text-white pt-2">
          <motion.button whileTap={{scale:0.9}} className="bg-green-600 p-1 w-1/3 rounded">Completed</motion.button>
          <motion.button  whileTap={{scale:0.9}} className="bg-red-600 p-1 w-1/3 rounded">Give Up</motion.button>
        </div>
      </div>
  )
}

export default AcceptTask