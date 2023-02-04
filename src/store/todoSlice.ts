import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state, action) {},
    removeTask(state, action) {},
    toggleTask(state, action) {},
  },
});
