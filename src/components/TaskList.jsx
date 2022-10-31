import React from 'react'
//import InputData from '../data/InputData';
import Tasks from './Tasks';
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion'

//TaskData is a list of info
function TaskList({TaskData, handleClickClose}) {
    
  if(!TaskData || TaskData.length === 0){
    return <p>No Task Listed Yet!</p>
  }
  
  // without animation
  return (
    <div className="task-list">
        {TaskData.map((item) => ( 
        <Tasks key = {item.taskId} each={item} handleClickClose = {handleClickClose}/>
        ))}
    </div>
    
  )
}

TaskList.propTypes = {
    
    //TaskData: PropTypes.array.isRequired
    // or
    TaskData: PropTypes.arrayOf(
        PropTypes.shape(
            {taskId: PropTypes.string.isRequired,
        
        text: PropTypes.string.isRequired,
        selected: PropTypes.number.isRequired,
    }))
}

export default TaskList