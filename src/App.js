import React, { useEffect, useState } from "react";
import { injectGlobal } from "@emotion/css";
import styled from "@emotion/styled";
import "./App.css";

import getList from "./Provider";
import { Tasks, Date, Clock, TaskForm } from "./components";
import { useDispatch } from "react-redux";
import { setTasks } from "./redux/reducers/taskReducer";
import { Sun, Notebook, CheckSquare, WarningCircle } from "phosphor-react";

injectGlobal`
  .side-bar{
    width: 23%;
    position: relative;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(60px);
    -webkit-backdrop-filter: blur(60px);
  }
  .tab-active {
    background: rgba(0, 0, 0, 0.3);
  }
  .completedPill{
    color:#fff;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 3px 15px;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 0.9rem;
    width: fit-content;
  }
  .noselect {
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;                         
  }
  .tabIcon{
    margin-right: 10px;
  }
`;

const View = styled.div`
  height: 100vh;
  display: flex;
`;
const Main = styled.main`
  width: 77%;
  padding: 30px;
  position: relative;
`;
const MainTitle = styled.h1`
  color: #fff;
  margin: 0;
`;

const Account = styled.div`
  font-size: 0.9rem;
  margin-left: 20px;
`;
const Name = styled.p`
  font-size: 0.8rem;
  margin-top: 8px;
  margin-bottom: 20px;
  margin-left: 10px;
`;
const SmallText = styled.p`
  font-size: 0.7rem;
  margin: 0;
`;

const TasksContainer = styled.div`
  width: 100%;
  height: 65vh;
  margin: 20px 0;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.div`
  width: 94%;
  padding-left: 6%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &:active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

function App() {
  // React State
  const [filter, setFilter] = useState({ type: "myday", title: "My Day" });
  // Redux State
  const dispatch = useDispatch();

  // In the app we use setTasks to set the tasks recieved
  // from axios for the first time
  const getListUI = async () => {
    const response = await getList();
    dispatch(setTasks(response.data));
  };

  // Get the tasks from the API for the 1st time
  useEffect(() => {
    getListUI();
  }, []);

  // Renders the correct tasks based on the state filter
  function taskFilter(state) {
    switch (state) {
      case "myday":
        return (
          <>
            <Tasks type="active" />
            <p className="completedPill">Completed</p>
            <Tasks type="completed" />
          </>
        );
      case "active":
        return <Tasks type="active" />;
      case "completed":
        return <Tasks type="completed" />;
      case "important":
        return <Tasks type="important" />;
      default:
        return null;
    }
  }

  function handleTabClick(newType, newTitle) {
    setFilter({
      type: newType,
      title: newTitle,
    });
  }

  return (
    <div id="app" className="App">
      <View>
        <div className="left-bar side-bar">
          <Name>kiquevb To Do</Name>
          <Account>
            Enrique Vergara
            <SmallText>github.com/kiquevb</SmallText>
          </Account>
          <br />
          <br />
          <Tab
            onClick={() => handleTabClick("myday", "My Day")}
            className={`noselect ${
              filter.type === "myday" ? "tab-active" : ""
            }`}
          >
            <Sun
              className="tabIcon"
              size={24}
              color="#f5b400"
              weight="duotone"
            />
            My Day
          </Tab>
          <Tab
            onClick={() => handleTabClick("active", "Active Tasks")}
            className={`noselect ${
              filter.type === "active" ? "tab-active" : ""
            }`}
          >
            <Notebook
              className="tabIcon"
              size={24}
              color="#d6d6d6"
              weight="duotone"
            />
            Active
          </Tab>
          <Tab
            onClick={() => handleTabClick("completed", "Completed Tasks")}
            className={`noselect ${
              filter.type === "completed" ? "tab-active" : ""
            }`}
          >
            <CheckSquare
              className="tabIcon"
              size={24}
              color="#018911"
              weight="duotone"
            />
            Completed
          </Tab>
          <Tab
            onClick={() => handleTabClick("important", "Important Tasks!")}
            className={`noselect ${
              filter.type === "important" ? "tab-active" : ""
            }`}
          >
            <WarningCircle
              className="tabIcon"
              size={24}
              color="#ab0303"
              weight="duotone"
            />
            Important
          </Tab>
          <Clock className="clockStyle" />
        </div>

        <Main>
          <MainTitle>{filter.title}</MainTitle>
          <Date />
          <TasksContainer>{taskFilter(filter.type)}</TasksContainer>
          <TaskForm />
        </Main>
      </View>
    </div>
  );
}

export default App;
