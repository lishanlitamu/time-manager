import React from 'react'
import './App.css';
import Header from './components/Header';
//import Tasks from './components/Tasks';
import { useState } from 'react';
import InputData from './data/InputData';
import TaskList from './components/TaskList';
//import Card from './components/shared/Card';
import TimeStat from './components/TimeStat';
import TaskForm from './components/TaskForm';
import {v4 as uuidv4} from 'uuid'


function App() {

  const [TaskData, setTaskData] = useState(
    InputData
  )
  const handleClickClose = (i) =>{
    if (window.confirm('Are you sure you want to delete this task?')){
      setTaskData(TaskData.filter((t) => t.taskId !== i))
    }
    
  }

  const handleAddTask = (t) => {
    t.taskId = uuidv4()

    setTaskData([t, ...TaskData])
    
  }

  return (
    <>
    <Header />

    <div className='container'>
      <TaskForm handleAddTask={handleAddTask}/>
      <TimeStat taskData = {TaskData}/>
      <TaskList TaskData={TaskData} handleClickClose = {handleClickClose} />
    </div>
    
    </>
    
  )
}

export default App