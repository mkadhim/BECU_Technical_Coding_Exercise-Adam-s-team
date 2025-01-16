// src/TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleTaskStatus }) => (
    <li onClick={() => toggleTaskStatus(task.id)}>
        {task.name} - {task.completed ? 'Completed' : 'Pending'}



    </li>
);

export default TaskItem;