import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoSlice";

const Todo = ({ todo }) => {
  // consts
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center w-1/2  p-5 border-b border-dotted  my-3 relative">
      <button className="material-symbols-outlined p-2 bg-[#2a2a2a] rounded-full mr-5">
        check
      </button>
      <p className=" mr-auto">{todo.task}</p>
      <div className="">
        <button className="material-symbols-outlined mx-2 p-2 bg-[#2a2a2a] rounded-full ">
          edit
        </button>
        <button
          className="material-symbols-outlined p-2 bg-[#2a2a2a] rounded-full "
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          delete
        </button>
        <span className="font-light text-xs absolute bottom-0 right-3">
          Made at {todo.createdAt}
        </span>
      </div>
    </div>
  );
};

// #85bf6b

export default Todo;
