import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [TaskData, setTaskData] = useState([
        {
            selected: 1,
            taskId:"001",
            text:"This is a task for demostration only. Please delete it before adding a new task."

        }
    ])

    const handleClickClose = (i) =>{
        if (window.confirm('Are you sure you want to delete this task?')){
          setTaskData(TaskData.filter((t) => t.taskId !== i))
        }
      }
    // update App.js
    // <TaskList  handleClickClose = {handleClickClose} />
    // <TaskList />
    // then also update it in TaskList.jsx


    const handleAddTask = (t) => {
        t.taskId = uuidv4()
    
        setTaskData([t, ...TaskData])
        
      }
    // update Add.js
    // <TaskForm handleAddTask={handleAddTask}/>
    // <TaskForm />
    // then also make changes in TaskForm.jsx
    return <TaskContext.Provider value = {{TaskData, handleClickClose, handleAddTask}}>
        {children}
    </TaskContext.Provider>
}


export default TaskContext