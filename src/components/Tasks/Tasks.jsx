import React from "react";

import { Task } from "../";
import { useSelector } from "react-redux";

const Tasks = ({ type }) => {
  // In tasks we only show the corresponding to-do list (active or completed)
  const todoList = useSelector((state) => state.task);

  let listAux = [];
  let activeFlag = true;
  switch (type) {
    case "active":
      listAux = todoList.active;
      break;
    case "completed":
      listAux = todoList.completed;
      activeFlag = false;
      break;

    default:
      listAux = todoList.active;
      break;
  }

  return (
    <div>
      {listAux.map((singleTask, index) => {
        return (
          <Task
            task={singleTask}
            active={activeFlag}
            index={index}
            key={singleTask.id}
            className="taskElement"
          />
        );
      })}
    </div>
  );
};

export default Tasks;
