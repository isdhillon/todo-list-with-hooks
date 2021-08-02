import React,{useState} from 'react'

export default function Todo() {
    //tasklist list array settasklist 
    const [taskList,SetTaskList]=useState([]);
    //current task update current task 
    const [currTask,setCurrTask]=useState("");
    //update task list
    const updateTaskList=()=>{
        //set the task list
        //modify the tasklist set the tasklist and add element at the last
        SetTaskList(TaskList=>[...TaskList,{id:TaskList.length,task:currTask}])
        setCurrTask("")
    }
    //delete from task list
    const deleteFromTaskList=(id)=>{
        //set task list apply filter on current task and sort it on the basis of id.
        SetTaskList((taskList)=>taskList.filter((currTask)=>currTask.id!=id))
    }
    return (
        <div>
            {/*input container*/}
        <div className="input-container">
            {/*set value*/}
            {/*On change set current the current task */}
            <input type="text" value={currTask} onChange={e=>setCurrTask(e.target.value)} /> 
            {/*update the task list */}
            <button onClick={updateTaskList}>Submit</button>
        </div>
        
        <div className="task-list">
            <ul>
              {     //apply map on tasklist
                  taskList.map((currTask)=>{
                      return(
                          //update task and current task id
                          <li className="task" key={currTask.id}>
                              <p>{currTask.task}</p>
                              {/*delete from task list */}
                              <button onClick={()=>deleteFromTaskList(currTask.id)}>Delete</button>
                          </li>
                      )
                  })
              }
            </ul>


        </div>
        </div>
    )
}
