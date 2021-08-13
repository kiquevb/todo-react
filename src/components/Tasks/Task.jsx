import React from "react";

import { useDispatch } from "react-redux";
import { completeTask, restoreTask } from "../../redux/reducers/taskReducer";

const Task = ({ task, active, index }) => {
  const dispatch = useDispatch();

  function handleComplete(index) {
    dispatch(completeTask(index));
  }
  function handleRestore(index) {
    dispatch(restoreTask(index));
  }

  console.log(task);

  const style = {
    margin: "1em",
    backgroundColor: "#1c91eb",
    padding: "0.5em",
  };

  return (
    <div style={style}>
      {task.title}
      {task.description === undefined || task.description === null ? (
        <p></p>
      ) : (
        <p>{task.description}</p>
      )}
      {active ? (
        <button onClick={() => handleComplete(index)}>Complete</button>
      ) : (
        <button onClick={() => handleRestore(index)}>Restore</button>
      )}
      <p>Prioridad: {task.prioridad}</p>
      {task.dateAdded === undefined || task.dateAdded === null ? null : (
        <p>Added: {task.dateAdded}</p>
      )}
      {task.dateCompleted === undefined ||
      task.dateCompleted === null ? null : (
        <p>Completed: {task.dateCompleted}</p>
      )}
    </div>
  );
};

export default Task;
