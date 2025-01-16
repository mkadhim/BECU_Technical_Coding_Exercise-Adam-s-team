// src/TaskFilter.js
import React from 'react';

const TaskFilter = ({ setFilter }) => (
    <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
);

export default TaskFilter;