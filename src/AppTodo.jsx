import React, { useState } from "react";

const TodoList = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input field for adding new tasks
  const [taskInput, setTaskInput] = useState("");

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_task, index) => index !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
