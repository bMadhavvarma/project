import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../taskList/AllTasks'

const AdminDashboard = ({data,changeUser}) => {
  return (
    <div>
        <Header  data ={data} changeUser={changeUser} />
        <CreateTask/>
        <AllTasks  />
    </div>
  )
}

export default AdminDashboard