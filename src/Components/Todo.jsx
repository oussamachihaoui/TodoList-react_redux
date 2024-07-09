import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../Redux/todoSlice";

const Todo = ({ todo }) => {
  // consts
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center w-1/2  p-5 border-b border-dotted  my-3 relative">
      <button
        className={
          todo.done
            ? "material-symbols-outlined p-2 bg-[#2a2a2a]  rounded-full mr-5 text-[#85bf6b] "
            : "material-symbols-outlined p-2 bg-[#2a2a2a]  rounded-full mr-5"
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
      <div>
        <button className="material-symbols-outlined mx-2 p-2 bg-[#2a2a2a] rounded-full hover:text-[#666] ">
          edit
        </button>
        <button
          className="material-symbols-outlined p-2 bg-[#2a2a2a] rounded-full hover:text-[#666] "
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

// line-through decoration-[#85bf6b] text-[#666] /

export default Todo;
