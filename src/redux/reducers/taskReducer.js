import { createSlice } from "@reduxjs/toolkit";

function getDate() {
  let date = new Date();
  return `${date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  })}, ${date.toLocaleTimeString()}`;
}

export const taskReducer = createSlice({
  name: "task",
  initialState: { active: [], completed: [] },
  reducers: {
    // Divides the tasks for the first time into active or completed
    setTasks: (state, { payload }) => {
      payload.forEach((element) => {
        element.active
          ? state.active.push(element)
          : state.completed.push(element);
      });
    },
    completeTask: (state, { payload }) => {
      let taskAux = state.active[payload];
      taskAux.dateCompleted = getDate();
      taskAux.dateAdded = null;
      state.completed.push(taskAux);
      state.active.splice(payload, 1);
    },
    restoreTask: (state, { payload }) => {
      let taskAux = state.completed[payload];
      taskAux.dateAdded = getDate();
      taskAux.dateCompleted = null;
      state.active.push(taskAux);
      state.completed.splice(payload, 1);
    },
    addTask: (state, { payload }) => {
      let taskAux = payload;
      taskAux.dateAdded = getDate();
      taskAux.dateCompleted = null;
      state.active.push(taskAux);
    },
  },
});

// Escritura
export const { setTasks, completeTask, restoreTask, addTask } =
  taskReducer.actions;
// Lectura
export default taskReducer.reducer;
