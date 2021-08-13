import React, { useEffect } from "react";
import "./App.css";

import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";
import getList from "./Provider";
import { Tasks, Date, Clock, TaskForm } from "./components";
import { useDispatch } from "react-redux";
import { setTasks } from "./redux/reducers/taskReducer";

injectGlobal`
  .side-bar{
    width: 20%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  .tab-active {
    background: rgba(0, 0, 0, 0.2);
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
`;

const View = styled.div`
  height: 100vh;
  display: flex;
`;

const Main = styled.main`
  width: 80%;
  padding: 30px;
  position: relative;
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
const Account = styled.div`
  font-size: 0.9rem;
  margin-left: 20px;
`;

const Tab = styled.div`
  width: 94%;
  padding-left: 6%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const TasksContainer = styled.div`
  width: 100%;
  height: 65vh;
  margin: 20px 0;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background: #ccc;

    border-radius: 4px;
  }
`;

function App() {
  const dispatch = useDispatch();

  // In the app we use setTasks to set the tasks recieved
  // from axios for the first time
  const getListUI = async () => {
    const response = await getList();
    dispatch(setTasks(response.data));
  };

  useEffect(() => {
    getListUI();
  });

  return (
    <div id="app" className="App">
      {/* <main>
        <Date />
        <Clock />
        true = active ; false = completed
        <h1>Active tasks:</h1>
        <Tasks type="active" />
        <h1>Completed tasks:</h1>
        <Tasks type="completed" />
        <TaskForm />
      </main> */}

      <View>
        <div className="left-bar side-bar">
          <Name>kiquevb To Do</Name>
          <Account>
            Enrique Vergara
            <SmallText>luiskike.vergara@gmail.com</SmallText>
          </Account>
          <br />
          <Tab className="tab-active">☀️ My Day</Tab>
          <Tab>📝 Active</Tab>
          <Tab>✔️ Completed</Tab>
          <Tab>⚠️ Important</Tab>
        </div>

        <Main>
          <Date />
          <Clock />
          <TasksContainer>
            <Tasks type="active" />
            <p className="completedPill">Completed</p>
            <Tasks type="completed" />
          </TasksContainer>
          <TaskForm />
        </Main>
      </View>
    </div>
  );
}

export default App;
