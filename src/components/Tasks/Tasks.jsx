import React from "react";

import { Task } from "../";
import { useSelector } from "react-redux";

const Tasks = ({ type }) => {
  // In tasks we only show the corresponding to-do list (active, completed or important)
  const todoList = useSelector((state) => state.task);

  let listAux = [];
  let activeFlag = true;
  switch (type) {
    case "completed":
      listAux = [...todoList.completed];
      activeFlag = false;
      break;
    default:
      listAux = [...todoList.active];
      break;
  }

  return (
    <>
      {listAux.map((singleTask, index) => {
        // Filter important tasks from active if necesary
        let showFlag = true;
        if (type === "important") {
          if (singleTask.prioridad !== "alta") showFlag = false;
        }

        return (
          <Task
            task={singleTask}
            show={showFlag}
            active={activeFlag}
            index={index}
            key={singleTask.id}
          />
        );
      })}
    </>
  );
};

export default Tasks;
