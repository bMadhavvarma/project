import React from 'react'

const CompleteTask = ({elem}) => {
  return (
    <div className="bg-green-500 rounded p-3 flex flex-col shrink-0 w-full sm:w-[48%] lg:w-[30%] h-auto">
    <div className="flex justify-between bg-transparent">
      <h1 className="text-white p-2  rounded font-semibold bg-orange-600">{elem.category}</h1>
      <h3 className="text-white text-md font-semibold bg-transparent">{elem.taskDate}</h3>
    </div>
    <h1 className="bg-transparent mt-5 text-xl text-white font-bold">{elem.taskTitle}</h1>
    <p className="text-white">
      {elem.taskDescription} </p>
    
  </div>
  )
}

export default CompleteTask