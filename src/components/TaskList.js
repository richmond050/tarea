import React from 'react';

function TaskList({ tasks, toggleComplete, deleteTask }) {
   
return (
    <ul>
        {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
                <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
        ))}
    </ul>
    );
}

export default TaskList;