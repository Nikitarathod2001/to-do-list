import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, getTodoList, status } = useContext(AppContext);

  useEffect(() => {
    getTodoList();
  }, [status]);

  console.log(todos);

  return (
    todos &&
    todos.length > 0 && (
      <div className="flex flex-col items-center mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 max-w-2xl mx-auto border border-indigo-200 rounded-2xl shadow-lg">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    )
  );
};

export default TodoList;
