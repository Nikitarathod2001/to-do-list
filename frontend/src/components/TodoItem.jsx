import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const TodoItem = ({ todo }) => {

  const {backend, setStatus} = useContext(AppContext);

  const changeStatus = async () => {
    try {

      const {data} = await axios.post(backend + "/api/todos/change-status", {todoId: todo._id});

      if(data.success) {
        setStatus(prev => !prev);
      }
      else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const deleteTodo = async () => {
    try {

      const {data} = await axios.delete(backend + "/api/todos/delete-todo", {data: {todoId : todo._id}});

      if(data.success) {
        setStatus(prev => !prev);
      }
      else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-md bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 mb-4">
      <p
        className={` ${
          todo.completed ? "line-through text-gray-400" : "text-gray-600"
        }`}
      >
        {todo.task}
      </p>
      <div className="flex gap-3">
        <button onClick={changeStatus}
          className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
            todo.completed
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          {todo.completed ? "Completed" : "Pending"}
        </button>
        <button onClick={deleteTodo} className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-200 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
