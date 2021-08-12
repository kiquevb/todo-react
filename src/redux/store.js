import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";

function initStore() {
  return configureStore({
    reducer: {
      task: taskReducer,
    },
  });
}

const store = initStore();
export default store;
