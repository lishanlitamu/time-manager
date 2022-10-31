import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
// Wrap TaskForm within the component Card
// instead of writing a html <button>, customize one
import Button from './shared/Button'
import TimeSelect from './TimeSelect'
function TaskForm({handleAddTask}) {
  // const [temp, setTemp] = useState(_default_value_for_temp_)
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  // btnDisabled is set to true by default until the character limit is satisfied
  const [message, setMessage] = useState('') // used for validation on text limit
  // handled as newTask changes in typing
  // therefore use handleNewTaskInput
  
  const [selected, setSelected] = useState(1)


  const handleNewTaskInput = (event) => {
    // get what's typed in the form

    // no commas after setXXX
    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
    } else if (text && text.trim().length <= 10) {
        setBtnDisabled(true)
        setMessage('Each task must be at least 10 characters')
    } else {
        
        setMessage(null)
        setBtnDisabled(false)
    }
       setText(event.target.value)
    
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10){
            let newText = {
                text,
                selected

            }
        handleAddTask(newText)
        setText('')
        }
    }

  
  return (
    <Card>
        <form className='add-text' onSubmit={handleSubmit}>
            <h2>How many hours would you spend on this new task?</h2>
            
            <div className='input-group'>
                <input onChange={handleNewTaskInput} type='text' 
                        placeholder='Write your new task here!'
                        value = {text}></input>
                <Button type ='submit' isDisabled={btnDisabled}>Add</Button>
                
            </div>
            <TimeSelect select={setSelected} selected={selected}></TimeSelect>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default TaskForm