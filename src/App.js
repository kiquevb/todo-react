import React, { useEffect } from "react";
import "./App.css";

import getList from "./Provider";
import { Tasks, Date, Clock, TaskForm } from "./components";
import { useDispatch } from "react-redux";
import { setTasks } from "./redux/reducers/taskReducer";

function App() {
  const dispatch = useDispatch();

  // In the app we use setTasks to set the tasks recieved
  // from axios for the first time
  const getListUI = async () => {
    const response = await getList();
    dispatch(setTasks(response.data));
  };

  useEffect(() => {
    getListUI();
  });

  return (
    <div id="app" className="App">
      <main>
        <Date />
        <Clock />
        {/* true = active ; false = completed */}
        <h1>Active tasks:</h1>
        <Tasks type="active" />
        <h1>Completed tasks:</h1>
        <Tasks type="completed" />
        <TaskForm />
      </main>
    </div>
  );
}

export default App;
