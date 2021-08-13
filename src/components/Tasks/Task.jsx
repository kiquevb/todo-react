import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { completeTask, restoreTask } from "../../redux/reducers/taskReducer";

const TaskStyled = styled.div`
  margin: 20px 0;
  background-color: rgba(41, 41, 41, 0.95);
  border-radius: 5px;
  padding: 12px;
  width: 95%;
`;

const Task = ({ task, active, index }) => {
  const dispatch = useDispatch();

  function handleComplete(index) {
    dispatch(completeTask(index));
  }
  function handleRestore(index) {
    dispatch(restoreTask(index));
  }

  return (
    <TaskStyled>
      {active ? (
        <button onClick={() => handleComplete(index)}>Complete</button>
      ) : (
        <button onClick={() => handleRestore(index)}>Restore</button>
      )}
      {task.title}
      {task.description === undefined || task.description === null ? null : (
        <p>{task.description}</p>
      )}

      <p>Prioridad: {task.prioridad}</p>
      {task.dateAdded === undefined || task.dateAdded === null ? null : (
        <p>Added: {task.dateAdded}</p>
      )}
      {task.dateCompleted === undefined ||
      task.dateCompleted === null ? null : (
        <p>Completed: {task.dateCompleted}</p>
      )}
    </TaskStyled>
  );
};

export default Task;
