import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, getTodoList, status } = useContext(AppContext);

  useEffect(() => {
    getTodoList();
  }, [status]);

  return (
    todos &&
    todos.length > 0 && (
      <div className="flex flex-col items-center mt-6 p-6 max-w-2xl mx-auto">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    )
  );
};

export default TodoList;
