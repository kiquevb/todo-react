import React from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskReducer";

let titleInput = React.createRef();
let descInput = React.createRef();

const Form = () => {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();

    let newtask = {
      title: titleInput.current.value,
      prioridad: "media",
    };

    if (descInput.current.value !== "") {
      newtask.description = descInput.current.value;
    }

    dispatch(addTask(newtask));

    titleInput.current.value = "";
    descInput.current.value = "";
    titleInput.current.focus();
  }

  return (
    <form autocomplete="off" onSubmit={handleClick}>
      <input
        ref={titleInput}
        type="text"
        name="title"
        autoFocus
        placeholder="Task Title"
        required
      ></input>
      <input
        ref={descInput}
        type="text"
        name="title"
        placeholder="Description"
      ></input>
      <input type="radio" name="prioridad" value="alta" id="alta" />
      <label for="alta">Alta</label>
      <input type="radio" name="prioridad" value="media" id="media" checked />
      <label for="media">Media</label>
      <input type="radio" name="prioridad" value="baja" id="baja" />
      <label for="baja">Baja</label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;
