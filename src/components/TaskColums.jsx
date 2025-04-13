import React from 'react';
import Todo from '../assets/direct-hit.png';
import './TaskColumn.css'

function TaskColums(props) {
  return (
    <section className="task-column">
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={props.icon} alt="todo-icon" />{props.name}
      </h2>
    </section>
  );
}

export default TaskColums;
