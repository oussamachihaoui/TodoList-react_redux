import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-around w-1/2  p-4 border shadow-md rounded-3xl my-3">
      <button className="material-symbols-outlined p-2 bg-slate-700 rounded-full ">
        check
      </button>
      <p>{todo.task}</p>
      <div className="">
        <button className="material-symbols-outlined mx-2 p-2 bg-slate-700 rounded-full ">
          edit
        </button>
        <button className="material-symbols-outlined p-2 bg-slate-700 rounded-full ">
          delete
        </button>
        <span>{todo.createdAt}</span>
      </div>
    </div>
  );
};

export default Todo;
