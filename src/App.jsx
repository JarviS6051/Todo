import React from 'react'
import './App.css';
import { TaskForm } from './components/TaskForm';
import TaskColums from './components/TaskColums';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className='app_main'>
      <TaskColums name = "To-Do" icon = {todoIcon}></TaskColums>
      <TaskColums name = "Doing" icon = {doingIcon}></TaskColums>
      <TaskColums name = "Done" icon = {doneIcon}></TaskColums>
      </main>
    </div>
  )
}

export default App