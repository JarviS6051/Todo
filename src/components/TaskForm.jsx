import React from 'react'

export const TaskForm = () => {
  return (
    <header className='app_header'> 
    <form action="">
        <input type="text" className='task_input' placeholder='Enter your text' />
        <div className='task_form_bottom_line'>
            <button className='tag'>HTML</button>
            <button className='tag'>CSS</button>
            <button className='tag'>JAVASCRIPT</button>
            <button className='tag'>REACT</button>
            <select className='task_status'></select>
        </div>
    </form>
    </header>
  )
}
