import React from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react';
import TaskContext from '../context/TaskContext'

//function TimeStat({taskData}) {
  function TimeStat() {

  // Calculate the total hours
  // in reduce function
  // accumulator and current, two props
  // 0 is the default value to return
  const {TaskData} = useContext(TaskContext)
    // update App.js as well
    //<TimeStat taskData = {TaskData}/>
    //<TimeStat>


  let average = TaskData.reduce((accumulator, curr)=> {
    return accumulator + curr.selected
  }, 0)

  //.toFixed(1)
  // always show one decimal for average

  // .replace(/[.,]0$/,'')
  // if it's zero after decimal, replace it with ''
  average = average.toFixed(1).replace(/[.,]0$/,'')

  

  return (
    <div className='time-stats'>
        <h4>
            {TaskData.length} Tasks
        </h4>
        <h4>
            Total Time: {isNaN(average) ? 0: average} hours
        </h4>
        
    </div>
  )
}

// TimeStat.propTypes = {
//     taskData: PropTypes.array.isRequired,
//     // if you want to break down taskData to set type for each prop
//     // use PropTypes.arrayOf.
// }


export default TimeStat