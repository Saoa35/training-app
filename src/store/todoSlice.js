import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTask(state, action) {
      state.todos = state.todos.filter((task) => task.id !== action.payload.id);
    },
    toggleTask(state, action) {},
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
