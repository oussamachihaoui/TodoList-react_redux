import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  counterAdd,
  deleteTodo,
  doneTodo,
  editTodo,
  updateTodoHandler,
} from "../Redux/todoSlice";

const Todo = ({ todo }) => {
  //states
  const [updateTodo, setUpdateTodo] = useState(todo.task);
  // const { todos } = useSelector((state) => state.todo);

  // consts
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center w-1/2  p-5 border-b border-dotted  my-3 relative">
      {todo.isEdited ? (
        <>
          <input
            className="outline-none bg-inherit text-xl font-normal italic"
            type="text"
            defaultValue={todo.task}
            onChange={(e) => setUpdateTodo(e.target.value)}
            style={{ width: "100%" }}
          />
          <button
            className="material-symbols-outlined mx-2 p-2 bg-[#2a2a2a] rounded-full hover:bg-[#0353a4] "
            onClick={() => {
              dispatch(editTodo(todo.id));
              dispatch(updateTodoHandler({ id: todo.id, task: updateTodo }));
              dispatch(counterAdd(todo.id));
            }}
          >
            save
          </button>
        </>
      ) : (
        <>
          <button
            className={
              todo.done
                ? "material-symbols-outlined p-2 rounded-full mr-5 bg-[#85bf6b]  "
                : "material-symbols-outlined p-2 bg-[#2a2a2a]  rounded-full mr-5 hover:bg-opacity-50"
            }
            onClick={() => {
              dispatch(doneTodo(todo.id));
            }}
          >
            check
          </button>
          <p
            className={
              todo.done
                ? " font-light mr-auto text-xl line-through decoration-[#85bf6b] text-[#666]"
                : "mr-auto font-light text-xl"
            }
          >
            {todo.task}
          </p>
          <button
            className="material-symbols-outlined mx-2 p-2 bg-[#2a2a2a] rounded-full hover:bg-[#0353a4] "
            onClick={() => {
              dispatch(editTodo(todo.id));
            }}
          >
            edit
          </button>
        </>
      )}
      <div>
        <button
          className="material-symbols-outlined p-2 bg-[#2a2a2a] rounded-full hover:bg-[#ef233c] "
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          delete
        </button>
        <span className="font-extralight text-xs absolute bottom-0 right-0">
          {todo.countOfEdit > 0
            ? `Edited at ${todo.createdAt}`
            : `Made at ${todo.createdAt}`}
        </span>
      </div>
    </div>
  );
};

export default Todo;
