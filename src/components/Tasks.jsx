import React from 'react'
//import { useState } from 'react'
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import TaskContext from '../context/TaskContext';


//function Tasks({each, handleClickClose}) {
function Tasks({each}) {
  const {handleClickClose, editTask} = useContext(TaskContext)
  return (
    <Card >

        <div className="num-display">
            {each.selected}
            
        </div>
        <button className='close'>
          <FaTimes onClick={() => handleClickClose(each.taskId)} color = 'purple'/>
        </button>
        
        <button className="edit">
          <FaEdit onClick={() => editTask(each)} color='purple'/>
        </button>

        <div className='text-display'>
              {each.text}
        </div>
        
    </Card>
  )
}
// <FaTimes onClick={() => handleClickClose(each.taskId)} color = 'purple'/>

//<button className='button-clear-time' onClick={eventhandler}>Increase 0.5 hour</button>
    
Tasks.propTypes = {
  each: PropTypes.object.isRequired
}


export default Tasks;

/*
<div className="num-display">
            {prop.taskId}
            
        </div>
        <div className="text-display">
                {prop.taskTitle}
        </div>
        */