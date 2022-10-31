import React from 'react'
import PropTypes from 'prop-types'
function TimeStat({taskData}) {


  // Calculate the total hours
  // in reduce function
  // accumulator and current, two props
  // 0 is the default value to return

  let average = taskData.reduce((accumulator, curr)=> {
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
            {taskData.length} Tasks
        </h4>
        <h4>
            Total time: {isNaN(average) ? 0: average} hours
        </h4>
        
    </div>
  )
}

TimeStat.propTypes = {
    taskData: PropTypes.array.isRequired,
    // if you want to break down taskData to set type for each prop
    // use PropTypes.arrayOf.
}


export default TimeStat