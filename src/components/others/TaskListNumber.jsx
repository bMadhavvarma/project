import React from 'react';

const TaskListNumber = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      <div className="bg-blue-500 rounded w-[45%] lg:w-[20%] h-20 p-3 flex flex-col">
        <h1 className="text-white text-3xl font-bold">{data.tasks.newTask}</h1>
        <h3 className="text-white text-sm font-semibold">New task</h3>
      </div>
      <div className="bg-green-500 rounded w-[45%] lg:w-[20%] h-20 p-3 flex flex-col">
        <h1 className="text-white text-3xl font-bold">{data.tasks.completed} </h1>
        <h3 className="text-white text-sm font-semibold">Completed</h3>
      </div>
      <div className="bg-yellow-500 rounded w-[45%] lg:w-[20%] h-20 p-3 flex flex-col">
        <h1 className="text-white text-3xl font-bold"> {data.tasks.active} </h1>
        <h3 className="text-white text-sm font-semibold">Accepted</h3>
      </div>
      <div className="bg-red-500 rounded w-[45%] lg:w-[20%] h-20 p-3 flex flex-col">
        <h1 className="text-white text-3xl font-bold">  {data.tasks.failed} </h1>
        <h3 className="text-white text-sm font-semibold">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
