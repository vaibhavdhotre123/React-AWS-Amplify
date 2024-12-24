import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple To-Do App</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t}{" "}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
