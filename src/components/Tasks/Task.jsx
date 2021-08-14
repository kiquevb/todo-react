import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { completeTask, restoreTask } from "../../redux/reducers/taskReducer";
import {
  CheckCircle,
  ArrowCounterClockwise,
  CellSignalLow,
  CellSignalMedium,
  CellSignalFull,
} from "phosphor-react";

const TaskStyled = styled.div`
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 5px;
  padding: 12px;
`;

const DivTitle = styled.div`
  display: flex;
  align-items: center;
  .mainButton {
    opacity: 0.2;
    &:hover {
      opacity: 0.75;
    }
    &:active {
      opacity: 1;
      transform: scale(0.9);
    }
  }
  .date {
    margin: 0;
    margin-left: auto;
    font-size: 0.7rem;
    opacity: 0.9;
  }
  .crossed {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: line-through;
    text-decoration-color: rgba(255, 255, 255, 0.7);
  }
`;
const DivInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  .priorityIcon {
    margin-left: auto;
  }
`;

const TaskTitle = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
`;
const Description = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const Task = ({ task, active, index, show }) => {
  const dispatch = useDispatch();

  function handleComplete(index) {
    dispatch(completeTask(index));
  }
  function handleRestore(index) {
    dispatch(restoreTask(index));
  }

  return show ? (
    <TaskStyled>
      <DivTitle>
        {active ? (
          <CheckCircle
            className="mainButton"
            size={20}
            color="#fff"
            onClick={() => handleComplete(index)}
          />
        ) : (
          <ArrowCounterClockwise
            className="mainButton"
            size={18}
            color="#fff"
            onClick={() => handleRestore(index)}
          />
        )}
        {active ? (
          <TaskTitle>{task.title}</TaskTitle>
        ) : (
          <TaskTitle className="crossed">{task.title}</TaskTitle>
        )}

        {task.dateAdded === undefined || task.dateAdded === null ? null : (
          <p className="date">{task.dateAdded}</p>
        )}
        {task.dateCompleted === undefined ||
        task.dateCompleted === null ? null : (
          <p className="date">{task.dateCompleted}</p>
        )}
      </DivTitle>
      <DivInfo>
        {task.description === undefined || task.description === null ? (
          <Description>No description available</Description>
        ) : (
          <Description>{task.description}</Description>
        )}
        {task.prioridad === "alta" ? (
          <CellSignalFull
            className="priorityIcon"
            size={16}
            color={"#e6310e"}
            weight="duotone"
          />
        ) : task.prioridad === "media" ? (
          <CellSignalMedium
            className="priorityIcon"
            size={16}
            color={"#ffd900"}
            weight="duotone"
          />
        ) : (
          <CellSignalLow
            className="priorityIcon"
            size={15}
            color={"#06d629"}
            weight="duotone"
          />
        )}
      </DivInfo>
    </TaskStyled>
  ) : null;
};

export default Task;
