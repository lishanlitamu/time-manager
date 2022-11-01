import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [TaskData, setTaskData] = useState([
        {
            selected: 5,
            taskId:"001",
            text:"This is a task for demostration only. Please delete it before adding a new task."

        }
    ])
    const [taskEdit, setTaskEdit] = useState({
        item: {}, // default to be empty
        edit: false, //default to fasle, if click it, turns to true, so we can edit it
    })

    // Delete a existing task
    const handleClickClose = (i) =>{
        if (window.confirm('Are you sure you want to delete this task?')){
          setTaskData(TaskData.filter((t) => t.taskId !== i))
        }
      }
    // update App.js
    // <TaskList  handleClickClose = {handleClickClose} />
    // <TaskList />
    // then also update it in TaskList.jsx

    // Add a new task
    const handleAddTask = (t) => {
        t.taskId = uuidv4()
    
        setTaskData([t, ...TaskData])
        
      }
    // update Add.js
    // <TaskForm handleAddTask={handleAddTask}/>
    // <TaskForm />
    // then also make changes in TaskForm.jsx

    // Update feedback item
    const updateTask = (id,updatedItem) => {
        setTaskData(TaskData.map((item) => (item.taskId === id ? {...item, ...updatedItem}: item)))
        
    }





    // set item to be edited
    const editTask = (item) => {
        setTaskEdit({
            item, 
            edit:true
        })
    }



    return <TaskContext.Provider value = {{TaskData, handleClickClose, handleAddTask, editTask, taskEdit, updateTask}}>
        {children}
    </TaskContext.Provider>
}


export default TaskContext