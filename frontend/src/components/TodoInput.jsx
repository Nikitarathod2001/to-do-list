import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const TodoInput = () => {

  const {backend, token, getTodoList} = useContext(AppContext);

  const [task, setTask] = useState("");

  const addTask = async () => {
    try {

      const {data} = await axios.post(backend + "/api/todos/add-task", {task}, {headers: {token}});

      if(!data.success) {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const addButtonHandler = async () => {
    await addTask();
    await getTodoList();
    setTask("");
  };

  return (
    <div className="flex items-center justify-center gap-3 p-4 max-w-lg mx-auto mt-1.5 bg-white rounded-lg">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task here..."
        className="flex-1 text-zinc-800 border border-gray-500 rounded-lg px-3 py-2 outline-0"
      />
      <button onClick={addButtonHandler} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
