import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 mb-4">
      <p
        className={` ${
          todo.completed === "true" ? "line-through text-gray-400" : "text-gray-600"
        }`}
      >
        {todo.task}
      </p>
      <div className="flex gap-3">
        <button
          className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
            todo.completed === "true"
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          {todo.completed === "true" ? "Completed" : "Pending"}
        </button>
        <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-200 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
