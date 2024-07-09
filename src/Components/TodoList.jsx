import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../Redux/todoSlice";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // states
  const [todo, setTodo] = useState({
    id: uuidv4(),
    task: "",
    done: false,
    isEdited: false,
    createdAt: new Date().toLocaleDateString(),
  });

  //  handlers

  const handleTodoChange = function (e) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmitTodo = function (e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({ ...todo, task: "" });
  };

  console.log(todo);
  return (
    <>
      <form
        action=""
        className="w-50% flex justify-center my-5  "
        onSubmit={handleSubmitTodo}
      >
        <input
          className="p-4 outline-none bg-inherit text-3xl border-b border-dotted font-light "
          type="text"
          name="task"
          placeholder="What need to be done today?"
          onChange={handleTodoChange}
          value={todo.task}
          size={50}
        />
      </form>
      <div className=" w-50%  flex flex-col justify-center  items-center ">
        {todos.map((td) => (
          <Todo todo={td} key={td.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
