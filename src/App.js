import React, { useState } from 'react';
import './styles.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  const [tasks, setTasks] = useState([]); 
  const addTask = (task) => {
    const newTask = {
      id: Date.now(), 
      name: task,
      completed: false, 
    };
    setTasks([...tasks, newTask]); 
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); 
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks); 
  };

  const clearTasks = () => {
    setTasks([]); 
  }

  const taskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
   <>
    <Navbar /> 
    <div className="container">
      <TaskForm addTask={addTask} />

      {taskCount > 0 ? (
        <>
          <p>
            You have {taskCount} task{taskCount > 1 ? 's' : ''}, {completedTasks} completed.
          </p>
          <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
          <button className="clear-btn" onClick={clearTasks}>Clear All</button>
        </>
      ) : (
        <p>No tasks yet. Start by adding a task!</p>
      )}
    </div>
    <Footer />
   </>   
  );
}

export default App;
