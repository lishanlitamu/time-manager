import React from 'react'
//import InputData from '../data/InputData';
import Tasks from './Tasks';
import PropTypes from 'prop-types';

//TaskData is a list of info
function TaskList({TaskData}) {
    
  if(!TaskData || TaskData.length === 0){
    return <p>No Task Listed Yet!</p>
  }

  return (
    <div className="task-list">
        {TaskData.map((item) => ( 
        <Tasks key = {item.taskId} item={item}/>
        ))}
    </div>
    
  )
}

TaskList.propTypes = {
    
    //TaskData: PropTypes.array.isRequired
    // or
    TaskData: PropTypes.arrayOf(
        PropTypes.shape(
            {taskId: PropTypes.number.isRequired,
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
    }))
}

export default TaskList