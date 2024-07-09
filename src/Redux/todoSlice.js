import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todo = createSlice({
  name: "todoList",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        task: "learn how to handle state in react",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
      },
      {
        id: uuidv4(),
        task: "make projects",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todo.reducer;
export const { addTodo, deleteTodo } = todo.actions;
