import React, { useState } from "react";
import styled from "@emotion/styled";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskReducer";

let titleInput = React.createRef();
let descInput = React.createRef();

const FormStyled = styled.form`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 45px;
  justify-content: space-between;
  padding: 0 15px;
  width: 95%;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const FormButton = styled.button`
  height: 30px;
  width: 30px;
`;

const TextInput = styled.input`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  height: 45px;
  outline: none;
  padding: 0;
  width: 40%;
`;

const Form = () => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("media");

  function handleSubmit(event) {
    event.preventDefault();
    let newtask = {
      title: titleInput.current.value,
      prioridad: priority,
    };

    if (descInput.current.value !== "") {
      newtask.description = descInput.current.value;
    }

    dispatch(addTask(newtask));

    titleInput.current.value = "";
    descInput.current.value = "";
    titleInput.current.focus();
  }

  function handleRadio(prioridad) {
    setPriority(prioridad);
  }

  return (
    <FormStyled autocomplete="off" onSubmit={handleSubmit}>
      <FormButton type="submit"></FormButton>
      <TextInput
        ref={titleInput}
        type="text"
        name="title"
        autoFocus
        placeholder="Task Title"
        required
      ></TextInput>
      <TextInput
        ref={descInput}
        type="text"
        name="title"
        placeholder="Description"
      ></TextInput>

      <input
        id="r1"
        type="radio"
        name="prioridad"
        value="alta"
        checked={priority === "alta"}
        onChange={() => handleRadio("alta")}
      />
      <input
        type="radio"
        name="prioridad"
        value="media"
        checked={priority === "media"}
        onChange={() => handleRadio("media")}
      />
      <input
        type="radio"
        name="prioridad"
        value="baja"
        checked={priority === "baja"}
        onChange={() => handleRadio("baja")}
      />
    </FormStyled>
  );
};

export default Form;
