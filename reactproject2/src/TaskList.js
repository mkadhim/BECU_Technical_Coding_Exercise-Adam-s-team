// src/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskStatus }) => (
    <ul>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
        ))}
    </ul>
);

export default TaskList;