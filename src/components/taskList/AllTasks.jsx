import React, { useContext } from 'react'
import { AuthContext } from './../../context/AuthProvider';

const AllTasks = () => {
   const authData= useContext(AuthContext)
  return (
  <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
  <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
    <h2 className='text-lg  text-white  font-medium w-1/5 text-center'>Employee Name</h2>
    <h3 className='text-lg  text-white font-medium w-1/5 text-center'>New Task</h3>
    <h5 className='text-lg  text-white font-medium w-1/5 text-center'>Active Task</h5>
    <h5 className='text-lg  text-white font-medium w-1/5 text-center'>Completed</h5>
    <h5 className='text-lg  text-white font-medium w-1/5 text-center'>Failed</h5>
  </div>
  <div>
    {authData.employees.map((elem) => (
      <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded' key={elem.id}>
        <h2 className='text-lg font-medium w-1/5 text-white text-center'>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-400 text-center'>{elem.tasks.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400 text-center'>{elem.tasks.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600 text-center'>{elem.tasks.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600 text-center'>{elem.tasks.failed}</h5>
      </div>
    ))}
  </div>
</div>

  )
}

export default AllTasks