import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    //state to store the new task
    const [task, setTask] = useState('');

    //function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (task.trim()) {
            addTask(task); 
            setTask(''); 
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)} //update the task state when the input changes
                />
                <button type="submit">Add Task</button> 
            </form>
      
        </div>
    )
};

export default TaskForm;
