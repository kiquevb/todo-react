import React, { useEffect } from "react";
import "./App.css";

import getList from "./Provider";
import { Task, Date, Clock } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { setTasks, completeTask } from "./redux/reducers/taskReducer";

function App() {
  // const [tasks, setTasks] = useState([]);
  const todoList = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const getListUI = async () => {
    const response = await getList();
    dispatch(setTasks(response.data));
  };

  useEffect(() => {
    getListUI();
  }, []);

  function handleComplete(id) {
    console.log(`Completing task ${id}`);
    dispatch(completeTask(id));
  }

  return (
    <div id="app" className="App">
      <main>
        <Date />
        <Clock />
        <h1>To do List:</h1>
        {todoList.active.map((value) => {
          return (
            <div key={value.id} className="taskElement">
              <Task task={value.title} />
              <button onClick={() => handleComplete(value.id)}>Complete</button>
            </div>
          );
        })}
        <h1>Completed Tasks</h1>
        {todoList.completed.map((value) => {
          return (
            <div key={value.id} className="taskElement">
              <Task task={value.title} />
              <button>Restore</button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
