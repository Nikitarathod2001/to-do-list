import React, { useState } from "react";

const TodoInput = () => {

  const [task, setTask] = useState("");

  return (
    <div className="flex items-center justify-center gap-3 bg-white shadow-md p-4 rounded-lg max-w-md mx-auto mt-1.5">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task here..."
        className="flex-1 text-zinc-500 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
