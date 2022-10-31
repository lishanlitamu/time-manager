import React from 'react'
//import InputData from '../data/InputData';
import { useContext } from 'react';
import Tasks from './Tasks';
//import PropTypes from 'prop-types';
//import {motion, AnimatePresence} from 'framer-motion'

// TaskContext is the TaskContext.js itself
// Therefore, no {} when importing it from 'TaskContext'
import TaskContext from '../context/TaskContext'
// After switching from prop drilling to useContext
// Delete the corresponding section from App.js, 
// which is <TaskList TaskData={TaskData} handleClickClose = {handleClickClose} />
// adjust it as <TaskList handleClickClose = {handleClickClose} />

//TaskData is a list of info
// if use TaskContext, we no longer need to pass TaskData as a prop
// function TaskList({TaskData, handleClickClose}) {
//function TaskList({handleClickClose}) {
function TaskList() {   
  //extract from the context for use
  const {TaskData} = useContext(TaskContext)

  if(!TaskData || TaskData.length === 0){
    return <p>No Task Listed Yet!</p>
  }
  
  // without animation
  return (
    <div className="task-list">
        {TaskData.map((item) => ( 
        <Tasks key = {item.taskId} each={item}/>
        ))}
    </div>
   // <Tasks key = {item.taskId} each={item} handleClickClose = {handleClickClose}/>
   // is updated as <Tasks key = {item.taskId} each={item}/> with useContext 
  )
}

// As prop TaskData is removed when we use TaskContext instead, 
// No need to define propTypes for TaskData
// TaskList.propTypes = {
    
//     //TaskData: PropTypes.array.isRequired
//     // or
//     TaskData: PropTypes.arrayOf(
//         PropTypes.shape(
//             {taskId: PropTypes.string.isRequired,
        
//         text: PropTypes.string.isRequired,
//         selected: PropTypes.number.isRequired,
//     }))
// }

export default TaskList