import { createSlice } from "@reduxjs/toolkit";

export const taskReducer = createSlice({
  name: "task",
  initialState: { active: [], completed: [] },
  reducers: {
    setTasks: (state, { payload }) => {
      payload.forEach((element) => {
        if (element.active) {
          state.active.push(element);
        } else {
          state.completed.push(element);
        }
      });
    },
    completeTask: (state, { payload }) => {
      console.log(`Reducer: Completing ${payload}`);
    },
  },
});

// Escritura
export const { setTasks, completeTask } = taskReducer.actions;
// Lectura
export default taskReducer.reducer;
