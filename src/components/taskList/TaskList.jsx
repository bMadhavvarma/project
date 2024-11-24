import React from "react";
import Failed from './Failed';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';


const Tasklist = ({data}) => {

  const {tasks}=data
  const {taskDetails}=tasks

  return (
    <div
      id="Tasklist"
      className="w-full h-full flex flex-wrap gap-5 p-5 lg:flex-nowrap overflow-y-auto lg:overflow-x-auto scrollbar-hidden"
    >
     {
      taskDetails.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask task={taskDetails} key={idx} elem={elem}/>
        }
        if(elem.failed){
          return <Failed task={taskDetails} key={idx} elem={elem}/>
        }
        if(elem.completed){
          return <CompleteTask task={taskDetails} key={idx} elem={elem}/>
        }
        if(elem.newTask){
          return <NewTask task={taskDetails} key={idx} elem={elem}/>
        }
      })
     }
    
    </div>
  );
};

export default Tasklist;
