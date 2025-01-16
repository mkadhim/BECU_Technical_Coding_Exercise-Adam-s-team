import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // Simulating API call
        const fetchTasks = async () => {
            const mockData = [
                { id: 1, name: 'Buy groceries', status: 'pending' },
                { id: 2, name: 'Complete project', status: 'completed' },
                { id: 3, name: 'Pay bills', status: 'pending' },
            ];
            setTasks(mockData);
        };

        fetchTasks();
    }, []);

    const toggleTaskStatus = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
                    : task
            )
        );
    };

    const filteredTasks =
        filter === 'all'
            ? tasks
            : tasks.filter((task) => task.status === filter);

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.name}</span>
                        <span> - {task.status}</span>
                        <button onClick={() => toggleTaskStatus(task.id)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
