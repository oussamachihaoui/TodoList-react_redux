import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todo = createSlice({
  name: "todoList",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        task: "Gym training at 10pm",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
        countOfEdit: 0,
      },
      {
        id: uuidv4(),
        task: "Make more React&Redux projects",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
        countOfEdit: 0,
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
    doneTodo: (state, action) => {
      state.todos.map((todo) =>
        action.payload === todo.id ? (todo.done = !todo.done) : todo.done
      );
    },
    editTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload
          ? (todo.isEdited = !todo.isEdited)
          : todo.isEdited
      );
    },
    updateTodoHandler: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload.id
          ? (todo.task = action.payload.task)
          : todo.task
      );
    },
    counterAdd: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.countOfEdit += 1) : todo.countOfEdit
      );
    },
  },
});

export default todo.reducer;
export const {
  addTodo,
  deleteTodo,
  doneTodo,
  editTodo,
  updateTodoHandler,
  counterAdd,
} = todo.actions;
