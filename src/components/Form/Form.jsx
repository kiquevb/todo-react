import React, { useState } from "react";
import styled from "@emotion/styled";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskReducer";
import {
  CellSignalLow,
  CellSignalMedium,
  CellSignalFull,
  PlusCircle,
} from "phosphor-react";

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

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const FormButton = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
    transform: scale(0.92);
  }
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

  function handlePriority(prioridad) {
    setPriority(prioridad);
  }

  return (
    <FormStyled autocomplete="off" onSubmit={handleSubmit}>
      <FormButton type="submit">
        <PlusCircle
          className="addButton"
          size={26}
          color="#fff"
          weight="light"
        />
      </FormButton>
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

      <CellSignalLow
        onClick={() => handlePriority("baja")}
        size={priority === "baja" ? 25 : 15}
        color={priority === "baja" ? "#06d629" : "#45b057"}
        weight="duotone"
      />
      <CellSignalMedium
        onClick={() => handlePriority("media")}
        size={priority === "media" ? 25 : 15}
        color={priority === "media" ? "#ffd900" : "#d1b828"}
        weight="duotone"
      />
      <CellSignalFull
        onClick={() => handlePriority("alta")}
        size={priority === "alta" ? 25 : 15}
        color={priority === "alta" ? "#e6310e" : "#f76d52"}
        weight="duotone"
      />
    </FormStyled>
  );
};

export default Form;
