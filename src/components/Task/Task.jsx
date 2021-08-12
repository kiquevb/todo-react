import React from "react";

const Task = ({ task = "Tarea sin nombre" }) => {
  const style = {
    margin: "1em",
    backgroundColor: "white",
    padding: "1em",
  };
  return <div style={style}>{task}</div>;
};

export default Task;
