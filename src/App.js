import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import InputData from './data/InputData';
import TaskList from './components/TaskList';
import Card from './components/shared/Card';


function App() {

  const [TaskData, setTaskData] = useState(
    InputData
  )

  return (
    <>
    <Header />
    <div className='container'>
      <TaskList TaskData={TaskData}/>
    </div>
    
    </>
    
  )
}

export default App