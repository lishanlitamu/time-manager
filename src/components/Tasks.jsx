import React from 'react'
//import { useState } from 'react'
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa'

function Tasks({each, handleClickClose}) {


  return (
    <Card >
        
        <button className='close'>
          <FaTimes onClick={() => handleClickClose(each.taskId)} color = 'purple'/>
        </button>
        <div className="num-display">
            {each.selected}
            
        </div>
        <p>
              {each.text}
        </p>
        
    </Card>
  )
}
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