// src/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ setTasks }) => {
    const [taskName, setTaskName] = useState('');

    const addTask = () => {
        const newTask = { id: Date.now(), name: taskName, completed: false };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskName('');
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;