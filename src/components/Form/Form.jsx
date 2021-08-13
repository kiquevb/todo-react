import React from "react";
import styled from "@emotion/styled";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskReducer";

let titleInput = React.createRef();
let descInput = React.createRef();

const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 20px;
`;

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
    <FormStyled autocomplete="off" onSubmit={handleClick}>
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
      <label htmlFor="alta">Alta</label>
      <input type="radio" name="prioridad" value="media" id="media" />
      <label htmlFor="media">Media</label>
      <input type="radio" name="prioridad" value="baja" id="baja" />
      <label htmlFor="baja">Baja</label>
      <button type="submit">Add Task</button>
    </FormStyled>
  );
};

export default Form;
