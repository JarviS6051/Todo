import React from 'react';
import './TaskColumn.css'
import TaskCart from './TaskCart';

function TaskColums({name, icon}) {
  return (
    <section className="task-column">
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt="todo-icon" />{name}
      </h2>
      <TaskCart></TaskCart>
    </section>
  );
}

export default TaskColums;
