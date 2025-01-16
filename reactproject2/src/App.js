import logo from './logo.svg';
import './App.css';
// src/App.js
import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('/api/tasks'); // Mocked API
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => (
        filter === 'completed' ? task.completed : filter === 'pending' ? !task.completed : true
    ));

    return (
        <div>
            <h1>To-Do App</h1>
            <TaskForm setTasks={setTasks} />
            <TaskFilter setFilter={setFilter} />
            <TaskList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
        </div>
    );
};

export default App;