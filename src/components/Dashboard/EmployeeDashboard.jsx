import React from 'react'
import Header from '../others/Header'
import TaskListNumber from './../others/TaskListNumber';
import Tasklist from '../taskList/Tasklist';


const EmployeeDashboard = ({changeUser,data}) => {

  return (
    <div>
      <Header changeUser={changeUser} data={data}/>
      <TaskListNumber data={data}/>
      <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard